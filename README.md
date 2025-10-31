<div align="center">

# 🔧✨ JOSETEC 
### Sistema Inteligente de Gestión de Reparaciones

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />

---

**🚀 Transforma la manera de gestionar tus reparaciones con tecnología de vanguardia**

*Un sistema web completo y moderno que conecta técnicos con clientes en tiempo real*

---

</div>

## ✨ Características Principales

<table>
<tr>
<td width="50%">

### 👨‍🔧 Panel de Técnico

```diff
+ Crear órdenes de reparación completas
+ Dashboard con estadísticas en tiempo real
+ Búsqueda rápida por código
+ Gestión de estados con flujo visual
+ Validación inteligente de clientes
+ Modal de confirmación para acciones críticas
```

**Estados del flujo:**
```
RECIBIDO → EN DIAGNÓSTICO → ESPERA DE APROBACIÓN 
→ EN REPARACIÓN → REPARADO → ENTREGADO ✅
```

</td>
<td width="50%">

### 👤 Panel de Cliente

```diff
+ Seguimiento en tiempo real 24/7
+ Interfaz ultra responsive
+ Sistema de valoraciones con estrellas
+ Progreso visual del estado
+ Acceso seguro con validación
+ Notificaciones de cambios de estado
```

**Experiencia del cliente:**
```
📱 Buscar → 👀 Seguir → ⭐ Calificar
```

</td>
</tr>
</table>

---

### 🔐 Seguridad de Nivel Empresarial

<div align="center">

| Característica | Descripción |
|:---:|:---|
| �️ **Encriptación** | Contraseñas con hash Werkzeug |
| � **CSRF Protection** | Tokens en todos los formularios |
| ✅ **Validación Dual** | Frontend (HTML5+JS) + Backend (Python) |
| 👁️ **Password Toggle** | Visibilidad controlada de contraseñas |
| � **Control de Acceso** | Validación de roles y permisos |
| 📧 **Email Verification** | Formato y unicidad garantizados |

</div>

---

## 🛠️ Stack Tecnológico

<div align="center">

### Backend Powerhouse 💪

<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
<img src="https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/Werkzeug-000000?style=for-the-badge&logo=flask&logoColor=white" />

**Flask 3.0+** • **SQLAlchemy ORM** • **Flask-Migrate** • **Python 3.11+**

---

### Frontend Moderno 🎨

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />

**TailwindCSS 3.0+** • **Vanilla JavaScript** • **Responsive Design** • **Custom Animations**

---

### Base de Datos 💾

<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />

**SQLite** (desarrollo) • **PostgreSQL/MySQL** (producción)

</div>

---

## 📦 Estructura del Proyecto

```
📁 Proyecto_JTec/
│
├── 🚀 app.py                           # Core de la aplicación Flask
├── 📋 requirements.txt                  # Dependencias del proyecto
│
├── 💾 instance/
│   └── database.db                      # Base de datos SQLite
│
├── 🗂️ models/
│   └── models.py                        # 📊 Modelos: Usuario, Orden, Valoracion
│
├── 🎮 controller/
│   ├── auth_controller.py               # 🔐 Autenticación y registro
│   ├── client_controller.py             # 👤 Lógica del cliente
│   └── technician_controller.py         # 👨‍🔧 Lógica del técnico
│
├── 🎨 templates/
│   ├── base.html                        # 🏗️ Template base responsive
│   ├── login.html                       # 🚪 Inicio de sesión
│   ├── register.html                    # ✍️ Registro de usuarios
│   ├── clientdashboard.html            # 📊 Dashboard del cliente
│   ├── clientInterface.html            # 🔍 Consulta pública
│   ├── TechnicianDashboard.html        # 🛠️ Dashboard del técnico
│   └── TechnicianInterface.html        # ⚙️ Interfaz alternativa
│
├── 🎭 static/
│   ├── css/
│   │   └── style.css                    # 💅 Estilos personalizados
│   ├── js/
│   │   └── script.js                    # ⚡ JavaScript interactivo
│   └── img/
│       └── ImageTec.png                 # 🖼️ Logo JOSETEC
│
└── 🔄 migrations/                       # Migraciones Alembic
    ├── alembic.ini
    ├── env.py
    └── versions/
```

---

##  Uso del Sistema

### Registro de Usuarios

1. Accede a `/register`
2. Selecciona tu rol (Cliente o Técnico)
3. Completa el formulario con:
   - Nombre completo (mínimo 3 caracteres)
   - Email válido
   - Contraseña (mínimo 6 caracteres)
   - Confirmación de contraseña

### Flujo de Trabajo del Técnico

1. **Iniciar sesión** como técnico
2. **Crear nueva orden**:
   - Ingresar datos del cliente (nombre, teléfono, email)
   - Ingresar datos del dispositivo (tipo, marca, modelo)
   - Describir la falla reportada
3. **Gestionar órdenes existentes**:
   - Buscar por código de seguimiento
   - Actualizar diagnóstico, piezas y costo
   - Cambiar estado de la orden
   - Eliminar órdenes si es necesario

### Flujo de Trabajo del Cliente

1. **Iniciar sesión** como cliente
2. **Buscar mi reparación**:
   - Ingresar código de seguimiento
   - Ver estado actual y progreso
   - Ver diagnóstico y costo (si están disponibles)
3. **Calificar el servicio** (solo órdenes entregadas):
   - Seleccionar calificación (1-5 estrellas)
   - Agregar comentario opcional

---

<div align="center">

### 📱 Adaptable a Cualquier Dispositivo

| Dispositivo | Resolución | Características |
|:---:|:---:|:---|
| 📱 **Móvil** | 320px - 640px | • Layout vertical apilado<br>• Menú hamburguesa<br>• Botones táctiles grandes |
| 📲 **Tablet** | 641px - 1023px | • Layout de 2 columnas<br>• Navegación completa<br>• Optimización táctil |
| 💻 **Desktop** | 1024px+ | • Grids de hasta 4 columnas<br>• Dashboard completo<br>• Experiencia premium |

</div>
---

## � Modelos de Base de Datos

<div align="center">

### 🗄️ Esquema de Datos

```mermaid
erDiagram
    Usuario ||--o{ Orden : crea
    Orden ||--o| Valoracion : tiene
    
    Usuario {
        int id PK
        string nombre
        string correo UK
        string contraseña
        string rol
    }
    
    Orden {
        int id PK
        string codigo UK
        string cliente
        string cliente_telefono
        string cliente_email
        string dispositivo
        string device_type
        string device_brand
        string device_model
        text falla
        text diagnosis
        text required_parts
        string repair_cost
        string estado
        int tecnico_id FK
        datetime fecha_creacion
        datetime fecha_actualizacion
    }
    
    Valoracion {
        int id PK
        int orden_id FK
        int rating
        text comentario
    }
```

</div>

---
## � Licencia

Este proyecto está bajo la **Licencia MIT** - mira el archivo [LICENSE](LICENSE) para más detalles.

---

## �‍💻 Autor

<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />

**Japaricio2004**

[![GitHub](https://img.shields.io/badge/GitHub-@Japaricio2004-181717?style=flat&logo=github)](https://github.com/Japaricio2004)

---

## 🌟 Agradecimientos

### 💖 Si este proyecto te resultó útil

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Japaricio2004/ProjectJTec?style=social)](https://github.com/Japaricio2004/ProjectJTec/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Japaricio2004/ProjectJTec?style=social)](https://github.com/Japaricio2004/ProjectJTec/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Japaricio2004/ProjectJTec?style=social)](https://github.com/Japaricio2004/ProjectJTec/watchers)

**⭐ ¡Considera darle una estrella en GitHub! ⭐**

---

<img src="https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Built_by-JOSETEC_Team-blue?style=for-the-badge" />

**Desarrollado con pasión por un equipo dedicado a la excelencia** 🚀

---

<sub>© 2025 JOSETEC. Todos los derechos reservados.</sub>

</div>
