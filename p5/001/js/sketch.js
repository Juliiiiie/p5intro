

let bug;

function setup(){
    createCanvas(720,480);
    background(200);
    // background(0);
    // n = random (10);
    //initialize a new object with jitter class
    bug = new Jitter();
    
}

function draw (){
    
//     ellipse(n, height/2, 20);
//     n += 5; 
//  // color(0,200,255);
//     console.log(n);
//    // print(n);

//dosplay the object
//move the object

   //create a class called jitter
   bug.display();
   bug.move();
}

class Jitter{
    constructor(){
//x position, y position, diameter, speed
        this.x = random(width);
        this.y = random(height);
        this.diameter = (10,30);
        this.speed = 1;
    }


    display(){
        ellipse(this.x,this.y,this.diameter,this.diameter);

    }
    move(){
        this.x += random(-this.speed, this.speed);
    }



}