//Middleware para manejar rutas no encontradas (404).
export const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  };
  