'use strict';

var assert = require('power-assert');
var sinon  = require('sinon');
var accumulateUntil = require('../dist/').accumulateUntil;

describe('accumulateUntil', function () {
  var CLOCK;

  before(function () {
    CLOCK = sinon.useFakeTimers();
  });
  after(function () {
    CLOCK.restore()
  });

  it('buffers frequently calls', function () {
    var callback = sinon.spy();
    var accumulated = accumulateUntil(callback, 3);

    accumulated('a');
    CLOCK.tick(1);
    assert(!callback.called);

    accumulated('b');
    CLOCK.tick(1);
    assert(!callback.called);

    accumulated('c');
    CLOCK.tick(1);
    assert(callback.called);
    assert(callback.calledWith(['a', 'b', 'c']));
  })
});

