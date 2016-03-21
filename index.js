/**
 * @module Wheel
 * @author lzhengms <lzhengms@gmail.com>
 */

'use strict'

var browser = require('nd-browser').browser

module.exports = function(node, handler) {
  if (!handler) {
    throw new Error('event handler is required!')
  }

  if (node.addEventListener) {
    if (browser.Firefox) {
      node.addEventListener('DOMMouseScroll', function(e) {
        handler(e.detail < 0 ? 'up' : e.detail > 0 ? 'down' : '', function() {
          e.preventDefault()
        })
      }, false)
    } else {
      node.addEventListener('mousewheel', function(e) {
        handler(e.wheelDelta >= 0 ? 'up' : e.wheelDelta <= 0 ? 'down' : '', function() {
          e.returnValue = false
        })
      }, false)
    }
  } else if (node.attachEvent) {
    node.attachEvent('onmousewheel', function(e) {
      e = window.event
      handler(e.wheelDelta > 0 ? 'up' : e.wheelDelta < 0 ? 'down' : '', function() {
        node.scrollTop += e.wheelDelta > 0 ? -60 : 60
        e.returnValue = false
      })
    })
  }
}
