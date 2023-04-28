const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const { getAllMock, getOneMock } = require('../../mock/productsMock');

describe('Products Service Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(productsModel, 'getAll').resolves(getAllMock)

      const result = await productsService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);

    })
    it('GetOne with data', async () => {
      sinon.stub(productsModel, 'getOne').resolves(getOneMock)

      const resultOne = await productsService.getOne();

      expect(resultOne).to.be.an('object');
      expect(resultOne).to.contain.keys('id','name')

    })
  })
})