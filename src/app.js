const express = require('express');
const productsController = require('./controllers/productsController');
// const validateProducts = require('./middlewares/productsValidator');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funciona
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:productsId', productsController.getOne);

app.post('/products', productsController.create);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;