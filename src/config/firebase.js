// Importo las funciones de Firebase para inicializar la app y acceder a Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Importo dotenv para poder usar variables de entorno definidas en el archivo .env
import dotenv from 'dotenv';
dotenv.config(); // Cargo variables de entorno

// Configuración de Firebase extrayendo las variables de entorno del archivo .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Inicializo la aplicación de Firebase con la configuración definida
const app = initializeApp(firebaseConfig);

// Inicializo Firestore, base de datos NoSQL de Firebase
const db = getFirestore(app);

// Exporto la instancia de Firestore para usarla en la aplicación
export default db;
