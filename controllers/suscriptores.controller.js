import Suscriptor from '../models/suscriptor.js';

export async function crearSuscriptor(req, res) {
  try {
    const suscriptor = new Suscriptor(req.body);
    await suscriptor.save();
    res.status(201).json({ mensaje: 'Suscriptor creado' });
  } catch (error) {
    console.log(error.mensaje);
    res.status(500).json({ mensaje: 'Error al crear el suscriptor' });
  }
}

export async function obtenerSuscriptores(req, res) {
  try {
    const suscriptores = await Suscriptor.find();
    res.status(200).json(suscriptores);
  } catch (error) {
    console.log(error.mensaje);
    res.status(500).json({ mensaje: 'Error al obtener el suscriptor' });
  }
}

export async function eliminarSuscriptor(req, res) {
  try {
    const suscriptor = await Suscriptor.findByIdAndDelete(req.params.id);
    if (suscriptor === null) {
      res.status(404).json({ mensaje: 'Suscriptor no encontrado' });
    }
    res.status(200).json({ mensaje: 'Suscriptor eliminado' });
  } catch (error) {
    console.log(error.mensaje);
    res.status(404).json({ mensaje: 'Suscriptor no encontrado' });
  }
}

export async function actualizarSuscriptor(req, res) {
  try {
    const suscriptor = await Suscriptor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (suscriptor === null) {
      res.status(404).json({ mensaje: 'Suscriptor no encontrado' });
    }
    res.status(200).json(suscriptor);
  } catch (error) {
    console.log(error.mensaje);
    res.status(404).json({ mensaje: 'Suscriptor no encontrado' });
  }
}
