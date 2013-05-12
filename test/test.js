var chai = require('chai')
chai.should()

describe('tri', function () {
  var tri = require('../')
  
  it('adds lug to Object.prototype', function () {
    Object.prototype.should.have.property('lug')
    Object.prototype.lug.should.be.a('function')
  })

  it('adds lug to global', function () {
    lug.should.be.a('function')
  })

})