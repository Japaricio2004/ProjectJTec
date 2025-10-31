from flask import Flask, redirect, url_for, render_template
from flask_wtf.csrf import CSRFProtect
from flask_wtf.csrf import CSRFError
from flask_migrate import Migrate
from models.models import db

# Importar controladores
from controller.auth_controller import register, login, logout
from controller.client_controller import client_interface, client_dashboard, cliente_buscar, cliente_valorar
from controller.technician_controller import technician

import os

app = Flask(__name__)
# Usar SECRET_KEY desde variable de entorno si está disponible
app.secret_key = os.environ.get("SECRET_KEY", "clave_secreta_segura")

# Configurar URI de la BD desde la variable de entorno DATABASE_URL cuando exista.
# En Vercel o plataformas externas deberías configurar DATABASE_URL a tu Postgres/MySQL.
# Si no existe, se usa SQLite local (útil para desarrollo), pero NO es recomendable
# para despliegues en Vercel porque el filesystem no es escribible/permanente.
database_url = os.environ.get("DATABASE_URL", "sqlite:///database.db")
# Algunos proveedores usan el esquema 'postgres://' que SQLAlchemy ya no acepta
if database_url.startswith('postgres://'):
    database_url = database_url.replace('postgres://', 'postgresql://', 1)
app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Configurar CSRF
csrf = CSRFProtect()
csrf.init_app(app)

# Inicializar BD
db.init_app(app)

# Configurar Flask-Migrate
migrate = Migrate(app, db)

# Registrar rutas
def root():
    # Redirige la raíz de la aplicación a la página de login
    return redirect(url_for("login"))

app.add_url_rule("/", view_func=root)
app.add_url_rule("/register", view_func=register, methods=["GET", "POST"])
app.add_url_rule("/login", view_func=login, methods=["GET", "POST"])
app.add_url_rule("/logout", view_func=logout)

# Rutas del cliente
app.add_url_rule("/client", view_func=client_interface, methods=["GET", "POST"])
app.add_url_rule("/cliente", view_func=client_dashboard, methods=["GET"])
app.add_url_rule("/cliente/buscar", view_func=cliente_buscar, methods=["POST"])
app.add_url_rule("/cliente/valorar", view_func=cliente_valorar, methods=["POST"])

# Registrar blueprint del técnico
app.register_blueprint(technician)

if __name__ == "__main__":
    app.run(debug=True)


# Handler global para registrar excepciones 500 y devolver una página amigable.
@app.errorhandler(500)
def handle_500(e):
    # Loguear la excepción para que aparezca en los logs de Vercel
    app.logger.exception('Internal Server Error: %s', e)
    # Responder con un mensaje genérico
    return "Internal Server Error", 500


# Handler para errores de CSRF (muestra un mensaje amigable en lugar de 500)
@app.errorhandler(CSRFError)
def handle_csrf(e):
    app.logger.warning('CSRF error: %s', e)
    # Devolver la plantilla de register con mensaje de error cuando corresponda
    return render_template('register.html', error='Token CSRF inválido o expirado. Por favor recarga la página e intenta de nuevo.'), 400
