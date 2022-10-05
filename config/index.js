import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  DB: process.env.MONGO_URI || 'mongodb://localhost/Ecommerce',
};
