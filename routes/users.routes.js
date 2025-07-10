const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Muestra todos los usuarios" });
});

router.get('/:id', (req, res) => {
  res.json({ 
    message: `GET de users con ID ${req.params.id}` 
  });
});

module.exports = router;