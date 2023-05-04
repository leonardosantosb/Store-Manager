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
  console.log('creatlog', createdProduct);
  console.log('creatprod', product);
  if (createdProduct === undefined || createdProduct === null) {
    return ({ type: 400, message: '"name" is required' });
  } if (product.length < 5) {
    return ({ type: 422, message: '"name" length must be at least 5 characters long' });
  }
  return ({ type: null, message: createdProduct });
};

const putOne = async (productName, productsId) => {
  const editProduct = await productsModel.putOne(productName, productsId);
  return editProduct;
};

const exclude = async (productsId) => {
  const deletedProduct = await productsModel.exclude(productsId);
  return deletedProduct;
};
module.exports = { getAll, getOne, create, putOne, exclude };