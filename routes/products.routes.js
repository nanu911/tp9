const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Muestra todos los productos" });
});

router.get('/:id', (req, res) => {
  res.json({ 
    message: `GET de products con ID ${req.params.id}` 
  });
});

module.exports = router;