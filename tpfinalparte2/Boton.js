class Boton {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    //propiedades:
    //tamaño:
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(143,227,34);
    this.colorOver = color(255,218,5);
    this.txt = txt_ ;
  }
  //metodos:
  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}
