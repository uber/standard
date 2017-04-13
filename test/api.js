'use strict';

var standard = require('../index.js');
var test = require('tape');

var standard = require('../')
var test = require('tape')

test('api usage', function (t) {
  t.plan(3)
  standard.lintFiles([], { cwd: 'bin' }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 171, 'error count 171')
  })
})
