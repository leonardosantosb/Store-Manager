const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const {
  getAllMock,
  getOneMock,
  insertMock,
  getDeleteMock,
} = require('../../mock/productsMock');



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
        
      const resultOne = await productsModel.getOne(2);

      expect(resultOne).to.be.an('object');
      expect(resultOne).to.contain.keys('id','name')

    })
    it('Create with data', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertMock }])
        
      const resultCreate = await productsModel.create(getOneMock);

      expect(resultCreate).to.be.an('object');
      expect(resultCreate).to.contain.keys('id', 'name')

    })
    it('putOne with data', async () => {
      sinon.stub(connection, 'execute').resolves()
        
      const resultEdit = await productsModel.putOne(getOneMock);

      expect(resultEdit).to.be.an('object');
      expect(resultEdit).to.contain.keys('id', 'name')

    })
    it('exclude with data', async () => {
      sinon.stub(connection, 'execute').resolves()
        
      const resultExclude = await productsModel.exclude(getDeleteMock);

      expect(resultExclude).to.be.an('array');
      expect(resultExclude).to.have.length(2);

    })
  })
})