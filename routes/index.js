const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');

function registerRoutes(app) {
  app.use('/products', productsRoutes);
  app.use('/users', usersRoutes);
}

module.exports = registerRoutes;