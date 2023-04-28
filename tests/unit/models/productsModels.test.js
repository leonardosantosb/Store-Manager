const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const { getAllMock, getOneMock } = require('../../mock/productsMock');



describe('Products Model Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(connection, 'execute').resolves([getAllMock])

      const result = await productsModel.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);

    })
    it('GetOne with data', async () => {
      sinon.stub(connection, 'execute').resolves([[getOneMock]])
        
      const resultOne = await productsModel.getOne();

      expect(resultOne).to.be.an('object');
      expect(resultOne).to.contain.keys('id','name')

    })
  })
})