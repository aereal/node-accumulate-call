'use strict';

let assert = require('power-assert');
let sinon  = require('sinon');
let bufferedApply = require('../built/src/').bufferedApply;

describe('bufferedApply', () => {
  var CLOCK;

  before(() => {
    CLOCK = sinon.useFakeTimers();
  });
  after(() => {
    CLOCK.restore()
  });

  it('buffers frequently calls', () => {
    let callback = sinon.spy();
    let buffered = bufferedApply(callback, 3);

    buffered('a');
    CLOCK.tick(1);
    assert(!callback.called);

    buffered('b');
    CLOCK.tick(1);
    assert(!callback.called);

    buffered('c');
    CLOCK.tick(1);
    assert(callback.called);
    assert(callback.calledWith(['a', 'b', 'c']));
  })
});

