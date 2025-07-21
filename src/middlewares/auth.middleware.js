// Importo el módulo jsonwebtoken para verificar y decodificar el token JWT
import jwt from 'jsonwebtoken';

/*
 Middleware de autenticación para proteger rutas privadas.
 Verifico que el encabezado Authorization contenga un token JWT válido.
 Si el token es correcto,continuo con la solicitud de lo contrario, respondo con un error 401 (no autorizado) o 403 (token inválido/expirado).
 */
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifico que exista el header Authorization y que comience con 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Extraigo el token quitando la palabra 'Bearer'
  const token = authHeader.split(' ')[1];

  try {
    // Verifico y decodifico el token usando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardo los datos decodificados del usuario en el objeto req para que puedan ser utilizados en los controladores
    req.user = decoded;
    // Continuo con la ejecución de la siguiente función middleware o controlador.
    next();
  } catch (error) {
    // Si el token es inválido o expiró, respondemos con error 403.
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};
