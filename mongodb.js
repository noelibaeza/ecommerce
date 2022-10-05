import mongoose from 'mongoose';
import config from './config/index.js';

mongoose
  .connect(config.DB)
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log(err));
