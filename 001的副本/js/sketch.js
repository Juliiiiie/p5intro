
var sf;

function setup(){
    createCanvas(720,480);
   
    // background(0);
    // n = random (10);
    //initialize a new object with jitter class
    sf = new StarField();
    
}

function draw (){
    background(0);
    sf.run();
}
function mousePressed(){
        if(mouseButton == LEFT){  
            sf.speedUP();
        }else if(mouseButton == RIGHT){  
            sf.speedDown();  
     }
    }
function mouseMoved(){
        sf.updateEndpoint(mouseX, mouseY);
     }
     
   //create a class called SF


class StarField {

    // var STAR_COUNT = width/2;
    // var MAX_SPEED = 11, MIN_SPEED = 1;
    // var SPEED_STEP = 1;  
    
    // var endpoint;
      stars = [];
   constructor(){  
        endpoint = new PVector(mouseX,mouseY);
        for (let i=0; i<STAR_COUNT; i++) {
            stars.push(new Star());
        }
    }


    speedUP(){  
        speed += SPEED_STEP;  
        speed = constrain(speed, MIN_SPEED, MAX_SPEED);  
    } 
   speedDown(){  
        speed -= SPEED_STEP;
    }
   run(){

    var speed;
        speed = (MAX_SPEED + MIN_SPEED) / 2; 
        s.move(speed);  
        for (var s in stars){
            s.transform(endpoint);
            s.checkEdge();
            s.display();
        }
    }
}
    
    
    
   class Star{
     
      star(){
        worldPosition = new PVector(random(0, width), random(0, height), random(0, MAX_DEPTH));  
        }  

       function move(speed){  
        worldPosition.z -= speed;  
        worldPosition.z = constrain(worldPosition.z, 0, MAX_DEPTH);  
        }  
       function transform(PVector endpoint){
           viewPosition = PVector.sub(worldPosition, endpoint).div(worldPosition.z).mult(SCALE);  
           screenPosition = PVector.add(endpoint, viewPosition);  
           diam = map(worldPosition.z, 0, MAX_DEPTH, MAX_DIAM, 0);  
           }
       function checkEdge()
           {  
            if(screenPosition.x <= 0 || screenPosition.x >= width || screenPosition.y <=0 || screenPosition.y >= height){ 
                worldPosition.set(random(0, width), random(0, height), MAX_DEPTH);   
           }   
         }
       function display(){  
        var MAX_DIAM = 16; 
        var MAX_DEPTH = width / 2;   
        var SCALE = MAX_DEPTH;     
        PVector worldPosition, screenPosition, viewPosition;  
        var diam;  
            fill(255);  
            noStroke();  
            ellipse(screenPosition.x, screenPosition.y, diam, diam);  
            }  
        void move(float speed){ 
            worldPosition.z -= speed; 
            worldPosition.z = constrain(worldPosition.z, 0, MAX_DEPTH);  
             }
}