import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import config from './config/index.js';
import productosRoutes from './routes/productos.routes.js';
import suscriptoresRoutes from './routes/suscriptores.routes.js';
import './mongodb.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

app.get('/status', (req, res) => {
  res.send('OK');
});

app.use('/productos', productosRoutes);
app.use('/suscriptores', suscriptoresRoutes);

app.all('/*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

// Server
app.listen(config.PORT, () => {
  console.log(`Servidor en el puerto: ${config.PORT}`);
});
