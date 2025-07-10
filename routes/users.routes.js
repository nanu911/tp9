const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ message: "Muestra todos los usuarios" });
});

router.get('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta GET de mi entidad users con el ID ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.json({ message: "Usuario creado exitosamente" });
});
¡
router.put('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta PUT de mi entidad users con el ID ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    message: `Esta es la ruta DELETE de mi entidad users con el ID ${req.params.id}`
  });
});

module.exports = router;
