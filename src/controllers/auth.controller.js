// Importo el servicio de autenticación y generación del token JWT
import { loginService } from '../services/auth.service.js'; 


/*
  Controlador para manejar el inicio de sesión de usuarios.
  Ruta: POST /auth/login 
  Este endpoint espera recibir en el cuerpo de la solicitud un email y una contraseña.
 */

export const loginController = async (req, res) => {
  try {
    //Extraigo las credenciales del body de la request
    const { email, password } = req.body;
    
    // Valida que ambos campos estén presentes
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña requeridos' });
    }

    // Llama al servicio de autenticación para validar las credenciales y generar el token
    const token = await loginService(email, password);
    res.json({ token });//Si las credenciales son válidas, devuelve un token JWT.
  } catch (error) {
    // Maneja errores, devolviendo el mensaje correspondiente y un código de estado adecuado

    res.status(error.status || 500).json({ error: error.message });
  }
};
