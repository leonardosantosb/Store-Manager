const productsModel = require('../models/productsModel');

// const createValidator = async (req, res, next) => {
//   const product = req.body;

//   if (product.name === undefined || product.name === null) {
//     return res.status(400).json({ message: '"name" is required' });
//   } if (product.name.length < 5) {
//     return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
//   }
//   next();
// };

const editValidator = async (req, res, next) => {
  const { name } = req.body;
  const { productsId } = req.params;
  const getAll = await productsModel.getAll();
  const validator = getAll.map(({ id }) => id);
  const find = validator.find((id) => id === Number(productsId));

  if (name === undefined || name === null) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  if (!find) {
    return res.status(404).json({ message: 'Product not found' });
  } 
  next();
};

const excludeValidator = async (req, res, next) => {
  const { productsId } = req.params;
  const getAll = await productsModel.getAll();
  const validator = getAll.map(({ id }) => id);
  const find = validator.find((id) => id === Number(productsId));

  if (!find) {
    return res.status(404).json({ message: 'Product not found' });
  } 
  next();
};

module.exports = { editValidator, excludeValidator };
