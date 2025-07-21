// Importo funciones de Firebase para operaciones CRUD con Firestore
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// Importo la instancia de Firestore inicializada
import db from '../config/firebase.js';

// Referencia a la colección 'productos' en Firestore
const productosRef = collection(db, 'productos');

/*
  Obtengo todos los productos desde la colección 'productos' y retorno lista de productos con su ID incluido.
 */
export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Error al obtener todos los productos: ' + error.message);
  }
};

/*
 Obtengo un producto específico por su ID.
 Retorno el producto encontrado o null si no existe.
 */
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, 'productos', id);
    const producto = await getDoc(docRef);
    return producto.exists() ? { id: producto.id, ...producto.data() } : null;
  } catch (error) {
    throw new Error(`Error al obtener el producto con ID ${id}: ` + error.message);
  }
};

/*
  Creo un nuevo producto en la colección 'productos'.
  data - Datos del nuevo producto.
  retorno el producto creado con su nuevo ID, en caso de error lanzo su respectivo mensaje.
 */
export const createProduct = async (data) => {
  try {
    const nuevo = await addDoc(productosRef, data);
    return { id: nuevo.id, ...data };
  } catch (error) {
    throw new Error('Error al crear un nuevo producto: ' + error.message);
  }
};

/*
  Elimino un producto por su ID de la colección 'productos'.
  id - ID del producto a eliminar.
 */
export const deleteProduct = async (id) => {
  try {
    const docRef = doc(db, 'productos', id);
    await deleteDoc(docRef);
  } catch (error) {
    throw new Error(`Error al eliminar el producto con ID ${id}: ` + error.message);
  }
};
