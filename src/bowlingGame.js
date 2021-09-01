const Frame = require('./frame')

class BowlingGame {

  constructor(){
    this.frames = [];
    for(let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
  }

  startGame() {
    this.automatePlay(this.frames);
    this.calculatePoints(this.frames);
    console.log(this.frames);
  }

  automatePlay(frames) {
    frames.forEach(frame => {
        while(!frame.isFrameFinished()) {
          frame.play();
        }
    });
    frames[9].handleLastFrame();
  }

  calculatePoints(frames) {
    frames.forEach((frame, index) => {
      const nextFramePins = this.getNextFrameScore(frames, index);
      const secondFramePins = this.getSecondNextFrameScore(frames, index);
      let score = this.getPreviousFrameScore(frames, index);
      if(frame.isStrike()) {
        score += frame.firstTurnPins + nextFramePins + secondFramePins;
      } else if(frame.isSpare()) {
        score += frame.getTotalPins() + nextFramePins;
      } else {
        score += frame.getTotalPins();
      }
      frame.setAccumulatedPoints(score);
    });
  }

  getPreviousFrameScore(frames, index) {
    if(index == 0) return 0;
    return frames[index - 1].getAccumulatedPoints();
  }

  getNextFrameScore(frames, index) {
      if(index == 9) return 0;
      return frames[index + 1].getTotalPins();
  }

  getSecondNextFrameScore(frames, index) {
      if(index == 8 || index == 9) return 0;
      return frames[index + 2].getTotalPins();
  }

}

module.exports = BowlingGame;