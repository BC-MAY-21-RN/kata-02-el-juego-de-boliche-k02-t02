class Frame {

    constructor() {
        this.initialPins = 10;
        this.firstTurnPins = 0;
        this.secondTurnPins = 0;
        this.isFirstTurn = true;
        this.nextFrame = null;
    }

    play() {
       /*
         ¿Es mi primer turno?
         -> Derribar pins
         -> Almacenar pins derribados
         -> ¿Fue strike?
         ----> El puntaje es 10 + los siguientes dos turnos + frame anterior
         ----> Pasar al siguiente frame
         -> No fue strike:
         ----> Pasar al turno 2

         Es el segundo turno
         -> Derribar pins
         -> Almacenar pins derribados
         -> ¿Fue spare?
         ----> El puntaje es 10 + el siguiente turno
         ----> Pasar al siguiente frame
         -> No fue spare:
         ----> El puntaje es primer turno + segundo turno + frame anterior
         ----> Pasar al siguiente frame
       */
       this.initialPins -= this.Random();
    }

    isStrike() {
      return this.firstTurnPins == 10 && this.isFirstTurn;
    }
    
    isSpare(){
      return this.secondTurnPins == 10 && !this.isFirstTurn;
    }

    setNextFrame(frame) {
      this.nextFrame = frame;
    }

    getNextFrame() {
      return this.nextFrame;
    }

    getRandom(){
      return Math.floor(Math.random() * 10);
    }
}

module.exports = Frame;