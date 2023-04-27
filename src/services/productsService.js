const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getOne = async (productsId) => {
  const OneProduct = await productsModel.getOne(productsId);
  return OneProduct;
};
module.exports = { getAll, getOne };