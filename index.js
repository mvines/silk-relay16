'use strict';

let device = require('./device');
device.init();

let testPattern = require('relay/test-pattern');

const Input = require('silk-input').default;
const log = require('silk-alog');
let input = new Input();
input.on('down', e => {
  if (e.keyId == 'touch') {
    testPattern();
  }
});
