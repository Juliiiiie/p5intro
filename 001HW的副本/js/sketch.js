let backgroundColor;

let x,y,d;

 
function setup() 
{
  // set canvas size
  createCanvas(720, 480);
  
  // default background color
  backgroundColor = color(255, 255, 255);
}
 
function draw() 
{
  background(backgroundColor);
  rectMode(CENTER);
  translate(width / 3, height / 3);
  translate(p5.Vector.fromAngle(millis() / 150, 40));
  rect(0, 0, 120, 120);
}
  

function mousePressed()
{
    fill(200);
    //ellipse(mouseX,mouseY,100,100);
  }


  function mouseReleased()
  {
      fill(100);
  }