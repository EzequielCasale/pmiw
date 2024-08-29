function dibujarRectangulo(i, posX, posY, colorBlanco) {


  noStroke();
  if (i % 2 == 0) {
    if (mouseX < 600 && mouseY <200) {
      let r = random(255);
      let v = random (255);
      let a =random (255);
      fill(r, v, a);
    } else if (mouseX < 600 && mouseY >200) {
      let r = random(255);
      let v = random(100);
      let a =random (255);
      fill(r, v, a);
    } else if (mouseX > 600 && mouseY >200) {
      let r = random(100);
      let v = random (255);
      let a =random (255);
      fill(r, v, a);
    } else {

      fill(colorBlanco);
    }
  } else {
    fill(0);
  }
  rect(posX, posY, 28, 49);
}
