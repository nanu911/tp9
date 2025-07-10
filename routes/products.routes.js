const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Muestra todos los productos" });
});

router.get('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta GET de mi entidad products con el ID ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.json({ message: "Producto creado exitosamente" });
});

router.put('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta PUT de mi entidad products con el ID ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta DELETE de mi entidad products con el ID ${req.params.id}`
  });
});

module.exports = router;
