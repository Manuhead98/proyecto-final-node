// Importo Router desde Express para definir rutas
import { Router } from 'express';

// Importo el controlador de inicio de sesión
import { loginController } from '../controllers/auth.controller.js';

// Creo una nueva instancia de Router
const router = Router();

/*
 Ruta: POST /auth/login
 Recibo las credenciales del usuario y devuelve un token JWT si son válidas.
*/
router.post('/login', loginController);

// Exporto el router para usarlo en el archivo principal del servidor
export default router;
