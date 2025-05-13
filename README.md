# CRUD Distribuido 
## Estructura

- `frontend/`: Aplicación Next.js 
- `read-service/`: Servicio de lectura (GET /users)
- `create-service/`: Crear nuevos registros (POST /users)
- `update-service/`: Actualizar registros existentes (PUT /users/:id)
- `delete-service/`: Eliminar registros (DELETE /users/:id)

## Base de Datos

Todos los servicios se conectan a una base de datos PostgreSQL centralizada usando variables de entorno.

## Variables de Entorno

Cada microservicio usa un archivo `.env` con esta configuración:

```env
DB_HOST=
DB_PORT=5432
DB_USER=
DB_PASSWORD=
DB_NAME=crud_app
PORT=3000