/**
 * Description: index.js
 * Author: lzhengms <lzhengms@gmail.com>
 * Date: 2015-01-31 12:24:09
 */

'use strict';

var browser = require('nd-browser');

var wheel = function(node, callback) {
  if (!callback) {
    return;
  }

  if (browser.ie) {
    node.attachEvent('onmousewheel', function(e) {
      e || (e = window.event);

      callback(e.wheelDelta > 0 ? 'up' : 'down', function() {
        node.scrollTop += e.wheelDelta > 0 ? -60 : 60;
        e.returnValue = false;
      }, 'ie');
    });
  } else if (browser.firefox) {
    node.addEventListener('DOMMouseScroll', function(e) {
      callback(e.detail < 0 ? 'up' : e.detail > 0 ? 'down' : '', function() {
        e.preventDefault();
      }, 'firefox');
    }, false);
  } else {
    node.addEventListener('mousewheel', function(e) {
      callback(e.wheelDelta >= 0 ? 'up' : e.wheelDelta <= 0 ? 'down' : '', function() {
        e.returnValue = false;
      }, 'standard');
    }, false);
  }
};

module.exports = wheel;
