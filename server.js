const express = require('express');
const app = express();
const registerRoutes = require('./routes');

app.use(express.json());

// Registrar todas las rutas
registerRoutes(app);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
