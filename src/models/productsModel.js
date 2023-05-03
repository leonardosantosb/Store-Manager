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

const create = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);', [product],
  );
  return { id: insertId, name: product.name };
};

const putOne = async (productName, productsId) => {
    await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?);',
    [productName, productsId],
  );
  return { id: productsId, name: productName };
};

const exclude = async (productsId) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?)', [productsId],
  );
  return true;
};

module.exports = { getAll, getOne, create, putOne, exclude };