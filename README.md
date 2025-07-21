# Proyecto Final Node - API REST con Firebase

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **Firebase Firestore** como base de datos NoSQL en la nube. Está diseñada para gestionar productos y usuarios autenticados mediante **JWT**.

## Tecnologías utilizadas

* Node.js
* Express
* Firebase (Firestore)
* JSON Web Tokens (JWT)
* dotenv
* body-parser
* cors

## Estructura del proyecto

```
proyecto-final-node/
├── index.js                 # Punto de entrada principal del servidor
├── .env                    # Variables de entorno (API Key, JWT secret, etc.)
├── .gitignore              # Archivos a ignorar por git
├── package.json            # Dependencias y metadatos del proyecto
└── src/
    ├── routes/             # Rutas (products.routes.js, auth.routes.js)
    ├── controllers/        # Controladores (products.controller.js, auth.controller.js)
    ├── services/           # Lógica de negocio (products.service.js)
    ├── models/             # Operaciones con Firestore (firestore.model.js)
    └── middlewares/        # Middleware personalizados (validaciones, manejo de errores)
```

## Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/Manuhead98/proyecto-final-node.git
cd proyecto-final-node
```

2. Instalá las dependencias:

```bash
npm install
```

3. Creá un archivo `.env` en la raíz del proyecto y agregá tus credenciales:

```env
FIREBASE_API_KEY=TU_API_KEY
FIREBASE_AUTH_DOMAIN=TU_DOMINIO
FIREBASE_PROJECT_ID=TU_ID_PROYECTO
FIREBASE_STORAGE_BUCKET=TU_BUCKET
FIREBASE_MESSAGING_SENDER_ID=TU_ID_REM
FIREBASE_APP_ID=TU_APP_ID
JWT_SECRET=tu_clave_secreta
```

4. Iniciá el servidor:

```bash
npm start
```

## Endpoints disponibles

### Autenticación (`/auth`)

* `POST /auth/login` - Iniciar sesión con email y contraseña (token JWT)

### Productos (`/api/products`)

* `GET /api/products` - Listar todos los productos
* `GET /api/products/:id` - Obtener producto por ID
* `POST /api/products` - Crear nuevo producto
* `DELETE /api/products/:id` - Eliminar producto por ID

## Despliegue

Podés desplegar este proyecto en servicios como **Vercel**, **Render** o **Railway**. Asegurate de configurar las variables de entorno correspondientes en el panel del servicio.

## Contribuciones

Este proyecto forma parte de una práctica personal de backend con Node.js. Se aceptan mejoras y sugerencias.

## Licencia

MIT
