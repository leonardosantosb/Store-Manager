const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const { getAllMock, getOneMock } = require('../../mock/salesMock');

describe('Products Service Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(salesModel, 'getAll').resolves(getAllMock)

      const result = await salesService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);

    })
    it('GetOne with data', async () => {
      sinon.stub(salesModel, 'getOne').resolves(getOneMock)

      const resultOne = await salesService.getOne(1);

      expect(resultOne).to.be.an('array');
      expect(result).to.have.length(2);

    })
  })
})