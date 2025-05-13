FROM postgres:15

# variables de entorno para la base
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=TuContraseñaSegura123
ENV POSTGRES_DB=crud_app

# Copia el script de inicialización al contenedor
COPY init.sql /docker-entrypoint-initdb.d/
