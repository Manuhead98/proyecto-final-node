// Importo jsonwebtoken para crear y verificar tokens JWT
import jwt from 'jsonwebtoken';
// Lista simulada de usuarios
const users = [
  {
    email: 'admin@empresa.com',
    password: 'admin123',
    role: 'admin',
  }
];

// Servicio que maneja la lógica de login
export const loginService = async (email, password) => {
  // Valido que se hayan recibido ambas credenciales
  if (!email || !password) {
    const error = new Error('Faltan credenciales');
    error.status = 400; // lanzo error en cada de que falte alguna credencial
    throw error;
  }

  // Busco al usuario con email y password coincidentes
  const user = users.find(u => u.email === email && u.password === password);

  // Si no encuentro el usuario con ese mail y esa pass, lanzo un error de autenticación
  if (!user) {
    const error = new Error('Credenciales inválidas');
    error.status = 401; // sin autorizacion
    throw error;
  }

  // Defino el payload que incluiremos en el JWT
  const payload = {
    email: user.email,
    role: user.role,
  };

  // Genero el token firmado con la clave secreta del entorno y con expiración de 1 hora
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  // Retorno el token generado
  return token;
};
