const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const { getAllMock,
  getOneMock,
  getDeleteMock,
  InsertMock,
  mockErrado} = require('../../mock/productsMock');

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

      const resultOne = await productsService.getOne(InsertMock);

      expect(resultOne).to.be.an('object');

      expect(resultOne).to.contain.keys('id','name')

    })
    it('create with data', async () => {
      sinon.stub(productsModel, 'create').resolves(getOneMock)

      const resultCreate = await productsService.create(1);

      expect(resultCreate).to.be.an('object');
      // expect(resultCreate.name).to.be.equal('Martelo de Thor');
      // expect(resultCreate.id).to.be.equal(1);

    })
    // it('name is required', async () => {
    //   sinon.stub(productsModel, 'create').resolves( undefined )
    //   const resultCreate = await productsService.create();

    //   expect(resultCreate).to.be.deep.equal({ type: 400, message: '"name" is required' })
    // })
    // it('"name" length must be at least 5 characters long', async () => {
    //   sinon.stub(productsModel, 'create').resolves(mockErrado)
    //   const resultCreate = await productsService.create();

    //   expect(resultCreate[0]).to.be.deep.equal({ type: 422, message: '\"name\" length must be at least 5 characters long' })
    // })
    it('putOne with data', async () => {
      sinon.stub(productsModel, 'putOne').resolves(getOneMock)

      const resultEdit = await productsService.putOne();

      expect(resultEdit).to.be.an('object');
      expect(resultEdit.name).to.be.equal('Martelo de Thor');
      expect(resultEdit.id).to.be.equal(1);

    })
    it('exclude with data', async () => {
      sinon.stub(productsModel, 'exclude').resolves(getDeleteMock)

      const resultExclude = await productsService.exclude();

      expect(resultExclude).to.be.an('array');
      expect(resultExclude).to.have.length(2);

    })
  })
})