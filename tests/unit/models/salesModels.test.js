const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');
const {
  getAllMock,
  getOneMock,
} = require('../../mock/salesMock');

describe('Sales Model Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(connection, 'execute').resolves([getAllMock])

      const result = await salesModel.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);

    })
    it('GetOne with data', async () => {
      sinon.stub(connection, 'execute').resolves([[getOneMock]])
        
      const resultOne = await salesModel.getOne(1);

      expect(resultOne).to.be.an('array');
      expect(result).to.have.length(2);

    })
  })
})