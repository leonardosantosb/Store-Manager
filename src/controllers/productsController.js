const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getOne = async (req, res) => {
  const { productsId } = req.params;
  const oneProduct = await productsService.getOne(productsId);

  if (oneProduct === undefined || oneProduct === null) {
  return res.status(404).json({ message: 'Product not found' });
  } 
  return res.status(200).json(oneProduct);
};

const create = async (req, res) => {
  const product = req.body;
  const result = await productsService.create(product);
  
  return res.status(201).json(result);
};

const putOne = async (req, res) => {
  const { productsId } = req.params;
  const { name } = req.body;
  const putProduct = await productsService.putOne(name, productsId);

  return res.status(200).json(putProduct);
};

const exclude = async (req, res) => {
  const { productsId } = req.params;
  await productsService.exclude(productsId);
  return res.status(204).json();
};
module.exports = { getAll, getOne, create, putOne, exclude };
