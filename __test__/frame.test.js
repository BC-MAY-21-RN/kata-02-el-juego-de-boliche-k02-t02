/* eslint-disable no-undef */
const Frame = require('../src/frame');

describe('Frame', () => {
  test('should have finished', () => {
    const frame = new Frame();
    frame.play();
    frame.play();
    expect(frame.isFinished()).toBe(true);
  });

  test('shouldnt have finished', () => {
    const frame = new Frame();
    frame.customPlay(4);
    expect(frame.isFinished()).toBe(false);
  });

  test('should be strike', () => {
    const frame = new Frame();
    frame.customPlay(10);
    expect(frame.isStrike()).toBe(true);
  });

  test('should be spare', () => {
    const frame = new Frame();
    frame.customPlay(4);
    frame.customPlay(6);
    expect(frame.isSpare()).toBe(true);
  });

});
