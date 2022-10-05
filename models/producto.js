import { Schema, model } from 'mongoose';

const productoSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
  imagen: { type: String, required: true },
});

export default model('Producto', productoSchema);
