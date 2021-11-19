class Bird extends Baseclass{
    constructor(x, y) {
      super (x,y,50,50);
      this.image = loadImage("imagenes/bird.png")
    }
    display(){
      var pos =this.body.position;
      
      super.display()
    }
  };