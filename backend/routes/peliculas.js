const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear nueva película
router.post('/', async (req, res) => {
  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    genero: req.body.genero,
    descripcion: req.body.descripcion,
    poster: req.body.poster
  });

  try {
    const nuevaPelicula = await pelicula.save();
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;