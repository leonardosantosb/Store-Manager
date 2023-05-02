const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getOne = async (saleId) => {
  const oneSale = await salesModel.getOne(saleId);
  return oneSale;
};

module.exports = { getAll, getOne };