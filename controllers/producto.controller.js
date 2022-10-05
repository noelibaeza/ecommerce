import Producto from '../models/producto.js';

export async function crearProducto(req, res) {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json({ mensaje: 'Producto creado' });
  } catch (error) {
    console.log(error.mensaje);
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
}

export async function obtenerProductos(req, res) {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error.mensaje);
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
}

export async function obtenerProductoPorNombre(req, res) {
  try {
    const productos = await Producto.find({ nombre: req.query.n});
    res.status(200).json(productos);
  } catch (error) {
    console.log(error.mensaje);
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
}

export async function obtenerProductoPorId(req, res) {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto === null) {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.log(error.mensaje);
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
}

export async function eliminarProducto(req, res) {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (producto === null) {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    console.log(error.mensaje);
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
}

export async function actualizarProducto(req, res) {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (producto === null) {
      throw new Error('Producto no encontrado');
    }
    res.status(200).json({ mensaje: 'Producto actualizado', producto });
  } catch (error) {
    console.log(error.mensaje);
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
}
