// Importo las dependencias necesarias
import express from 'express';          // Importo express para crear el servidor web
import cors from 'cors';                // Importo middleware para habilitar CORS (peticiones entre dominios)
import bodyParser from 'body-parser';  //  Importo middleware para parsear el cuerpo de las peticiones JSON
import dotenv from 'dotenv';            // importo dotenv para cargar variables de entorno desde .env
import productRoutes from './src/routes/products.routes.js';  // Rutas relacionadas a productos
import authRoutes from './src/routes/auth.routes.js';        // Rutas relacionadas a autenticación
import { notFoundHandler } from './src/middlewares/error.middleware.js'; // Importo middleware para manejar rutas no encontradas (404)

// Cargo las variables definidas en el archivo .env al proceso
dotenv.config();

// Inicializo la aplicación Express
const app = express();

// Defino el puerto en el que el servidor escuchará, desde variable de entorno o por defecto 3000
const PORT = process.env.PORT || 3000;

// Middlewares globales que se aplican a todas las rutas
app.use(cors());               // Permito que otros dominios puedan hacer peticiones a mi API
app.use(bodyParser.json());    // Permito leer datos JSON en el cuerpo de las peticiones

// Levanto las rutas agrupadas por funcionalidad
app.use('/api/products', productRoutes);  // Rutas para productos bajo el path /api/products
app.use('/auth', authRoutes);             // Rutas para autenticación bajo el path /auth


// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Bienvenido a la API REST de productos. Visitá /api/products o /auth para comenzar.');
});

// Middleware para manejar peticiones a rutas no definidas
app.use(notFoundHandler);

// Inicio el servidor para que escuche en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
