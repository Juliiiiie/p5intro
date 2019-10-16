var x=0,y=0;
var speed;
let t = 0; 
const Y_AXIS = windowWidth;
const X_AXIS = windowHeight;
let b1, b2, c1, c2;
var color1 = color(0, 0, 100);
var color2 = color(150,100,200);

function setup(){
createCanvas(windowWidth,windowHeight);
background(0,random(0,30),random(50,100));

}

function draw(){
  //setGradient(0,0,windowWidth,windowHeight,color1,color2,"Y");
  
  noStroke();
  fill(random(0,150),random(0,150),0);
  ellipse(x*speed,y*speed,100-x/4,100-y/4);
  if(x>=0 && x<windowWidth && y>=0 && y<= windowHeight){
  x+= random(0,10);
  y+=random(0,10);
  speed=1;

}else{
  noStroke();
  fill(50,random(200,250),random(100,250));
  const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
  const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
  // and also varies based on the particle's location
  const angle = xAngle * (x / width) + yAngle * (y / height);

  // each particle moves in a circle
  const myX = x + 20 * cos(2 * PI * t + angle);
  const myY = y + 20 * sin(2 * PI * t + angle);

  ellipse(myX*(-1)+x, myY*(-1)+y, 10+x/10,10+y/10); // draw particle
  speed=-1;
  x+= random(-5,3)*(speed);
  y+=random(-5,3)*(speed);

}
t = t + 0.01; 

if (mouseIsPressed) {
  noStroke();
  fill(random(20,90),random(120,190),150);
  rect(mouseX, mouseY,  mouseX/10, mouseY/10);
}



}


// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();
//   if (axis == "Y") {  // Top to bottom gradient
//     for (let i = y; i <= y+h; i++) {
//       var inter = map(i, y, y+h, 0, 1);
//       var c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(x, i, x+w, i);
//     }
//   }  
//   else if (axis == "X") {  // Left to right gradient
//     for (let j = x; j <= x+w; j++) {
//       var inter2 = map(j, x, x+w, 0, 1);
//       var d = lerpColor(c1, c2, inter2);
//       stroke(d);
//       line(j, y, j, y+h);
//     }
  
// }

// }

