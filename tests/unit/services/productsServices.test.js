const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const { getAllMock, getOneMock, getDeleteMock } = require('../../mock/productsMock');

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
    it('create with data', async () => {
      sinon.stub(productsModel, 'create').resolves(getOneMock)

      const resultCreate = await productsService.create();

      expect(resultCreate).to.be.an('object');
      expect(resultCreate.name).to.be.equal('Martelo de Thor');
      expect(resultCreate.id).to.be.equal(1);

    })
    it('putOne with data', async () => {
      sinon.stub(productsModel, 'putOne').resolves(getOneMock)

      const resultEdit = await productsService.putOne();

      expect(resultEdit).to.be.an('object');
      expect(resultEdit.name).to.be.equal('Martelo de Thor');
      expect(resultEdit.id).to.be.equal(1);

    })
    it('exclude with data', async () => {
      sinon.stub(productsModel, 'exclude').resolves(getDeleteMock)

      const resultEdit = await productsService.exclude();

      expect(result).to.be.an('array');
      expect(result).to.have.length(2);

    })
  })
})