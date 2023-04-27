const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
};

const getOne = async (productsId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [productsId],
  );
  return products;
};

module.exports = { getAll, getOne };