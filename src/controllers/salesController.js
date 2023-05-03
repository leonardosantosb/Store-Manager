const salesService = require('../services/salesService');

const getAll = async (req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  console.log('usar no teste', req.params);
  const oneSale = await salesService.getOne(id);

  if (oneSale === undefined || oneSale === null || oneSale.length === 0) {
  return res.status(404).json({ message: 'Sale not found' });
  } 
  return res.status(200).json(oneSale);
};

module.exports = { getAll, getOne };