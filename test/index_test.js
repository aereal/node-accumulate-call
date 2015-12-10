'use strict';

let assert = require('power-assert');
let sinon  = require('sinon');
let accumulateUntil = require('../built/src/').accumulateUntil;

describe('accumulateUntil', () => {
  var CLOCK;

  before(() => {
    CLOCK = sinon.useFakeTimers();
  });
  after(() => {
    CLOCK.restore()
  });

  it('buffers frequently calls', () => {
    let callback = sinon.spy();
    let accumulated = accumulateUntil(callback, 3);

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

