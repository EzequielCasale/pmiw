function preload(){
 loadImage('data/F_16.jpg'); 
 
}




let img;
let cant;
let colorBlanco;



function setup() {
 createCanvas(800, 400);
  background(150);
  img= loadImage("data/F_16.jpg");
  cant=800;
  colorBlanco=255;
  
  
  
}


function draw() {

  

  for (let j = 0; j < cant; j++) {

    let offset = calcularOffset(j);


    for (let i = 0; i < 300; i++) {
      let posX = (30 * i) + offset;
      let posY = 52* j;

      dibujarRectangulo(i, posX, posY, colorBlanco);
    }
  }
  image(img, 0, 0, 800/2, 400);
  

}
