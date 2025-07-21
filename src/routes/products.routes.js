// Importo express para crear el router
import express from 'express';

// Importo los controladores para manejar la lógica de cada ruta
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController
} from '../controllers/products.controller.js';

// Importo el middleware de autenticación para proteger ciertas rutas
import { authMiddleware } from '../middlewares/auth.middleware.js';

// Creamos una instancia del router de Express
const router = express.Router();

// Ruta GET para obtener todos los productos
router.get('/', getAllProductsController);

// Ruta GET para obtener un producto específico por ID
router.get('/:id', getProductByIdController);

// Ruta POST para crear un nuevo producto
// Esta ruta está protegida con el middleware de autenticación
router.post('/create', authMiddleware, createProductController);

// Ruta DELETE para eliminar un producto por ID
// También protegida por el middleware de autenticación
router.delete('/:id', authMiddleware, deleteProductController);

// Exporto el router para usarlo en la app principal
export default router;
