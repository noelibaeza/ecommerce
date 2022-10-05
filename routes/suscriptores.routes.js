import express from 'express';
const router = express.Router();
import {
  crearSuscriptor,
  obtenerSuscriptores,
  eliminarSuscriptor,
  actualizarSuscriptor,
} from '../controllers/suscriptores.controller.js';

router.post('/', crearSuscriptor);
router.get('/', obtenerSuscriptores);
router.delete('/:id', eliminarSuscriptor);
router.put('/:id', actualizarSuscriptor);

export default router;
