const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getOne = async (productsId) => {
  const oneProduct = await productsModel.getOne(productsId);
  return oneProduct;
};
module.exports = { getAll, getOne };