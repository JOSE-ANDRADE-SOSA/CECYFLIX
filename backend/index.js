require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const peliculasRoutes = require('./routes/peliculas');

app.use(express.json());
app.use('/api/peliculas', peliculasRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB Atlas');
  app.listen(3001, () => console.log('Servidor corriendo en el puerto 3001'));
})
.catch((err) => {
  console.error('❌ Error de conexión:', err.message);
});
