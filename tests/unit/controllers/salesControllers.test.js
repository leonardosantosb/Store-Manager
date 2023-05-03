const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
use(sinonChai)

const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');
const { getAllMock, getOneMock } = require('../../mock/salesMock');

describe('Sales Controller Tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore())
    it('GetAll with data', async () => {
      sinon.stub(salesService, 'getAll').resolves(getAllMock)
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(getAllMock)

    })
    it('GetOne with data', async () => {
      sinon.stub(salesService, 'getOne').resolves(getOneMock)

      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getOne(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(getOneMock)

    })
    it('GetOne with data', async () => {
      sinon.stub(salesService, 'getOne').resolves(undefined)

      const req = { params: { id: 999 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getOne(req, res);

      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' })
    })
  });
});