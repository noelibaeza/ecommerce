import express from 'express';
const router = express.Router();
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorNombre,
  obtenerProductoPorId,
  eliminarProducto,
  actualizarProducto,
} from '../controllers/producto.controller.js';

router.post('/', crearProducto);
router.get('/', obtenerProductos);
router.get('/nombre', obtenerProductoPorNombre);
router.get('/:id', obtenerProductoPorId);
router.delete('/:id', eliminarProducto);
router.put('/:id', actualizarProducto);

export default router;
