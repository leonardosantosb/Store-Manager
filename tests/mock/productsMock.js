const getAllMock = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
]

const getOneMock = {
  "id": 1,
  "name": "Martelo de Thor"
}

const mockErrado = {
"id": 1,
"name": "Mart"
}

const InsertMock = 1

const getDeleteMock = [
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
]

const errorMock = 
  { "message": "\"name\" is required" }


module.exports = { getAllMock, getOneMock, InsertMock, getDeleteMock, errorMock, mockErrado }