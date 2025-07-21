// Importo los servicios que encapsulan la lógica de acceso a datos para productos
import {
  fetchAllProducts,
  fetchProductById,
  createNewProduct,
  removeProductById
} from '../services/products.service.js';

/*
  Controlador para obtener todos los productos
  Ruta: GET /api/products 
  Llamo al servicio para obtener todos los productos desde la base de datos y los devuelve en formato JSON.
 */
export const getAllProductsController = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
  Controlador para obtener un producto por su ID
  Ruta: GET /api/products/:id 
  Extraigo el ID desde los parámetros de la URL, busco el producto correspondiente y lo devuelvo.
  Si no se encuentro el producto con ese ID lanzo un error.
 */
export const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await fetchProductById(id);
    res.json(product);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

/*
  Controlador para crear un nuevo producto
  Ruta: POST /api/products/create 
  Recibo los datos del producto en el cuerpo de la petición (body), los envío al servicio para su validación y almacenamiento. Devuelvo un mensaje de éxito o error.
  */
export const createProductController = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await createNewProduct(data);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
  Controlador para eliminar un producto por su ID
  Ruta: DELETE /api/products/:id 
  Extrae el ID del producto desde los parámetros de la URL y lo pasa al servicio para que lo elimine de la base de datos. Devuelvo un mensaje de éxito o error.
 */
export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removeProductById(id);
    res.json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
