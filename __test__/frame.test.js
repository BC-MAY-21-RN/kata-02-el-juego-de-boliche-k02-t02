/* eslint-disable no-undef */
const Frame = require('../src/frame');

describe('Frame', () => {
  let frame;
  beforeEach(async () => {
    frame = new Frame();
  });
  
  test('should have finished', () => {
    frame.play();
    frame.play();
    expect(frame.isFrameFinished()).toBe(true);
  });

  test('shouldnt have finished', () => {
    frame.customPlay(4);
    expect(frame.isFrameFinished()).toBe(false);
  });

  test('should be strike', () => {
    frame.customPlay(10);
    expect(frame.isStrike()).toBe(true);
  });

  test('should be spare', () => {
    frame.customPlay(4);
    frame.customPlay(6);
    expect(frame.isSpare()).toBe(true);
  });

});
