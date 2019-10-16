let b = [];


function keyPressed() {
  if(keyCode == 32){
    b = [];
  }
}

function mouseMoved() {
  if(b.length > 66){
    b.splice(0, 11);
  }
  b.push(new Ball(mouseX, mouseY))
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  for(let i = 0; i<b.length; i++){
    b[i].run()
    
  }
}

class Ball {
  constructor(x, y) {
    this.loc = createVector(x,y);
  }
  run(){
    this.update(this.loc)
    this.show(this.loc)
  }
  show(l){
    noFill();
    stroke(random(100), random(200), random(90));
    ellipse(l.x,l.y,random(5, 400));
  }
  update(l){
    l.x += random(-3, 3);
    l.y += random(-2, 2);
  }
}
