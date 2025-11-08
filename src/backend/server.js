import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './models/db.js';
import authRoutes from './routes/auth.js';    
/* eslint-env node */
const app = express();
const port = process.env.PORT || 5000;

// Conexión a la base de datos MongoDB
await connectDB();

// Middleware para habilitar CORS
app.use(cors({
  origin: ['http://localhost:5173', 'https://elegant-kringle-6c2dbc.netlify.app/'], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());
app.use(cookieParser());

// Rutas API
app.use('/api', authRoutes);

// Ruta raíz (para que no marque "Cannot GET /")
app.get('/', (req, res) => {
  res.send('🚀 Backend del proyecto integrador en funcionamiento correctamente');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en el puerto ${port}`);
});
