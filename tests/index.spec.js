'use strict'

// var $ = require('nd-jquery')
var chai = require('chai')
var sinonChai = require('sinon-chai')
var wheel = require('../index')

var expect = chai.expect
// var sinon = window.sinon

chai.use(sinonChai)

/*globals describe,it*/

describe('wheel', function() {

  it('new wheel', function() {
    expect(wheel).to.be.a('function')
  })

})
