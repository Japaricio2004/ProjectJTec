from flask import Flask, redirect, url_for
from flask_wtf.csrf import CSRFProtect
from flask_migrate import Migrate
from models.models import db

# Importar controladores
from controller.auth_controller import register, login, logout
from controller.client_controller import client_interface, client_dashboard, cliente_buscar, cliente_valorar
from controller.technician_controller import technician

app = Flask(__name__)
app.secret_key = "clave_secreta_segura"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
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
