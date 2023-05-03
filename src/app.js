const express = require('express');
const { createValidator, editValidator } = require('./middlewares/productsValidator');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funciona
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:productsId', productsController.getOne);

app.post('/products', createValidator, productsController.create);

app.get('/sales', salesController.getAll);

app.get('/sales/:id', salesController.getOne);

app.put('/products/:productsId', editValidator, productsController.putOne);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;