const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getOne = async (productsId) => {
  const oneProduct = await productsModel.getOne(productsId);
  return oneProduct;
};

const create = async (product) => {
  const createdProduct = await productsModel.create(product);
  return createdProduct;
};
module.exports = { getAll, getOne, create };