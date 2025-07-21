// Importo las funciones del modelo que utilizo con  Firestore
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../models/firestore.model.js';

// Servicio para obtener todos los productos
export const fetchAllProducts = async () => {
  try {
    return await getAllProducts();
  } catch (error) {
    // Capturo y lanzo un error si falla la operación
    throw new Error('Error al obtener productos: ' + error.message);
  }
};

// Servicio para obtener un producto por su ID
export const fetchProductById = async (id) => {
  try {
    const product = await getProductById(id);
    if (!product) {
      // Si no se encuentra el producto, lanzo un error con estado 404
      const error = new Error('Producto no encontrado');
      error.status = 404;
      throw error;
    }
    return product;
  } catch (error) {
    throw new Error('Error al obtener producto por ID: ' + error.message);
  }
};

// Servicio para crear un nuevo producto
export const createNewProduct = async (data) => {
  try {
    return await createProduct(data);
  } catch (error) {
    throw new Error('Error al crear producto: ' + error.message);
  }
};

// Servicio para eliminar un producto por su ID
export const removeProductById = async (id) => {
  try {
    const product = await getProductById(id);
    if (!product) {
      // Verifico si el producto existe antes de intentar eliminarlo
      const error = new Error('Producto no encontrado');
      error.status = 404;
      throw error;
    }
    await deleteProduct(id);
    return { message: 'Producto eliminado correctamente' };
  } catch (error) {
    throw new Error('Error al eliminar producto: ' + error.message);
  }
};
