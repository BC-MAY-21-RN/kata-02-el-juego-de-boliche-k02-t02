class Frame {

    constructor() {
        this.initialPins = 10;
        this.firstTurnPins = 0;
        this.secondTurnPins = 0;
        this.isFirstTurn = true;
        this.isFinished = false;
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
       /*
        1. Comienza el programa
        2. Se "ejecuta" el frame 1
        3. Se realiza una tirada en el frame 1
        4. { Se realiza el procesamiento del frame }
        5. Se avanza al siguiente frame y se repite todo

        Problema:
        - El puntaje
        Si en el frame n se hizo un strike, entonces no se puede calcular el puntaje en ese
        momento, el puntaje depende de los siguientes dos frames

        Solución:
        Iteracion 1:
        El procesamiento del frame unicamente sea derribar bolos
        Frame 1 -> Strike -> Se almacena que fue strike y el puntaje no se calcula
        Frame 2 -> T1: 3, T2: 5 -> Se almacena que se derribaron 8 bolos y se almacena
        Frame 3 -> Strike
        Frame 4 -> T1: 4, 
        .
        .
        .

        Iteracion 2:
        Frame 1 -> Vemos que fue strike entonces el puntaje es 10 + los siguientes dos frames -> 30
        Frame 2 -> Frame anterior + el frame 2
        Frame 3 -> Frame anterior + 10 + los siguiente dos

        Necesitamos:
        - Clase que contenga a los 10 frames y los procese

        frame.play();
        -> Diferenciar Turno 1, Turno 2
        -> Si no no se hizo un strike avanzar al turno 2
        -> Almacenar los bolos derribados
        -> Debe almacenar su estado (terminado, no terminado)
        
        for(recorre la lista de frames) {
          if(frame.noHaTerminado) {
            frame.play();
          }
        }
        
       */
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
}

module.exports = Frame;