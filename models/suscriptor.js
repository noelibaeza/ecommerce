import { Schema, model } from 'mongoose';

const suscriptorSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

export default model('Suscriptor', suscriptorSchema);
