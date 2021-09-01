class Frame {

  constructor() {
    this.initialPins = 10;
    this.firstTurnPins = 0;
    this.secondTurnPins = 0;
    this.isFirstTurn = true;
    this.isFinished = false;
    this.accumulatedPoints = 0;
  }

  customPlay(knockedDownPins) {
    if(this.isFinished) return;
    if(this.isFirstTurn) {
      this.firstTurnPins = knockedDownPins;
      this.isFirstTurn = false;
    } else {
      this.secondTurnPins = knockedDownPins;
      this.isFinished = true;
    }

    if(!this.isStrike()) return;
    this.isFinished = true;
  }

  play() {
    const remainingPins = this.initialPins - this.firstTurnPins;
    const knockedDownPins = this.getRandom(remainingPins);
    this.customPlay(knockedDownPins);
  }

  isFrameFinished() {
    return this.isFinished;
  }

  isStrike() {
    return this.firstTurnPins == 10;
  }
  
  isSpare(){
    return (this.firstTurnPins + this.secondTurnPins) == 10 ;
  }

  getRandom(max){
    return Math.floor(Math.random() * (max + 1));
  }

  setAccumulatedPoints(score) {
    this.accumulatedPoints = score;
  }

  getAccumulatedPoints(){
    return this.accumulatedPoints;
  }

  getTotalPins() {
    const thirdTurnPins = this.thirdTurnPins || 0;
    return this.firstTurnPins + this.secondTurnPins + thirdTurnPins;
  }

  handleLastFrame() {
    let remainingPins;
    if(this.firstTurnPins == 10) {
      remainingPins = this.initialPins;
    } else {
      remainingPins = this.initialPins - this.firstTurnPins;
    }
    this.secondTurnPins = this.getRandom(remainingPins);
    if(this.isStrike() || this.isSpare()) {
      this.thirdTurnPins = this.getRandom(this.initialPins);
    }
  }

}

module.exports = Frame;