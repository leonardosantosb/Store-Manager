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
  const { name } = product;
  const result = await productsService.create(product);
  if (name === undefined || name === null) {
    return res.status(400).json({ message: '"name" is required' });
  } if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return res.status(201).json(result);
};

module.exports = { getAll, getOne, create };