'use strict';

var assert = require('power-assert');
var sinon  = require('sinon');
var accumulateUntil = require('../built/src/').accumulateUntil;

describe('accumulateUntil', () => {
  var CLOCK;

  before(() => {
    CLOCK = sinon.useFakeTimers();
  });
  after(() => {
    CLOCK.restore()
  });

  it('buffers frequently calls', () => {
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

