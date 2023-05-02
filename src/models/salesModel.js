const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT 
SP.sale_id AS saleId, S.date AS date, SP.product_id AS productId, SP.quantity AS quantity
FROM 
StoreManager.sales_products AS SP 
INNER JOIN 
StoreManager.products AS P ON P.id = SP.product_id
INNER JOIN
StoreManager.sales AS S ON S.id = SP.sale_id
GROUP BY SP.sale_id, SP.product_id, SP.quantity
ORDER BY saleId ASC, productId ASC;`,
  );
  console.log('getall sales', sales);
  return sales;
};

const getOne = async (id) => {
  const [sales] = await connection.execute(
    `SELECT 
S.date AS date, SP.product_id AS productId, SP.quantity AS quantity
FROM 
StoreManager.sales_products AS SP 
INNER JOIN 
StoreManager.products AS P ON P.id = SP.product_id
INNER JOIN
StoreManager.sales AS S ON S.id = SP.sale_id
WHERE S.id = ?
GROUP BY SP.sale_id, SP.product_id, SP.quantity;`, [id],
  );
  return sales;
};

module.exports = { getAll, getOne };