# 🖥️ CMS MUOnline (Esqueleto en TypeScript)

Este proyecto es un **esqueleto base** para un CMS en TypeScript que se conecta a **Microsoft SQL Server (MSSQL)**.  
Ya incluye:

- 🔗 Conexión a MSSQL con **Knex**
- 🌱 Configuración por `.env`
- 🧩 Estructura modular (config, routes, controllers, models)
- ⚙️ Express configurado y listo para expandir
- 🏃 Script de inicio con `ts-node-dev` para desarrollo en caliente

---

## 📦 Requisitos

- **Node.js** >= 18  
- **npm** o **yarn**
- **SQL Server** (Express, Developer o Standard)
- **TCP/IP habilitado** en SQL Server si usas conexión directa  
- (Opcional) **SQL Server Management Studio (SSMS)** para administrar la base de datos

---

## 🚀 Instalación

Clona este repositorio e instala dependencias:

```bash
git clone https://github.com/Odisy25/Corets.git
cd Corets
npm install
⚙️ Configuración
Crea un archivo .env en la raíz del proyecto:


PORT=3000

# Conexión directa (recomendado)
DB_USE_ODBC=false
DB_HOST=localhost
DB_USER=sa
DB_PASS=123456
DB_NAME=MuOnline

# ODBC (no recomendado con Knex)
# DB_USE_ODBC=true
# ODBC_CONNECTION_STRING=DSN=MiDSN;UID=sa;PWD=123456;

JWT_SECRET=supersecreto
🔧 Notas:

DB_HOST debe ser tu servidor\instancia de SQL Server.

Si usas SQLEXPRESS, asegúrate que TCP/IP está habilitado en SQL Server Configuration Manager y el puerto 1433 abierto.

Si prefieres DSN ODBC, crea un DSN en el Administrador de Orígenes de Datos ODBC y usa DB_USE_ODBC=true.

🏃 Ejecución
Para correr en desarrollo:

npm run dev
Deberías ver en la terminal:


🔌 DB Configuración: { modo: 'Directa', host: 'localhost', db: 'MuOnline' }
Servidor corriendo en http://localhost:3000
🔍 Prueba de conexión
Abre en el navegador:


http://localhost:3000/api
Respuesta esperada:

json
{
  "message": "Conexión OK",
  "firstUser": [
    { "memb___id": "2" }
  ]
}
📂 Estructura del Proyecto
src/
├─ config/
│  └─ db.ts            # Configuración de Knex + MSSQL
├─ routes/
│  └─ index.ts         # Rutas base ("/api")
├─ controllers/        # Controladores (CRUD, lógica de negocio)
├─ models/             # Modelos de base de datos
├─ app.ts              # Inicializa Express
└─ server.ts           # Arranca el servidor



📄 Licencia
Este proyecto es de uso libre para desarrollo y aprendizaje.
No se incluye ninguna garantía.

