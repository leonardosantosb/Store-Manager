const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
use(sinonChai)

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { getAllMock, getOneMock, errorMock, getDeleteMock } = require('../../mock/productsMock');

describe('Products Controller Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(productsService, 'getAll').resolves(getAllMock)
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const result = await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(getAllMock)

    })
    it('GetOne with data', async () => {
      sinon.stub(productsService, 'getOne').resolves(getOneMock)

      const req = { params: { productsId: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getOne(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(getOneMock)

    })
      it('GetOne with data', async () => {
      sinon.stub(productsService, 'getOne').resolves(undefined)

      const req = { params: { productsId: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getOne(req, res);

        expect(res.status).to.have.been.calledWith(404)
        expect(res.json).to.have.been.calledWith({ message: 'Product not found' })

      })
      it('create with data', async () => {
      sinon.stub(productsService, 'create').resolves(getAllMock)

      const req = { body: { name: 'teste' } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.create(req, res);

        expect(res.status).to.have.been.calledWith(201)
      })

    it('PutOne with data', async () => {
      sinon.stub(productsService, 'putOne').resolves(getOneMock)

      const req = { params: { productsId: 1 }, body: { name: "Martelo de Thor"} };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.putOne(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(getOneMock)

    })
        it('exclude with data', async () => {
      sinon.stub(productsService, 'exclude').resolves(getDeleteMock)

      const req = { params: { productsId: 1 }};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.exclude(req, res);

      expect(res.status).to.have.been.calledWith(204)

    })
  })
})