function preload() {
  img=loadImage('https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  }
  
  function setup() {
  createCanvas(700,700);
  }
  
  function draw() {
  image(img,40,50,545,305)
  fill(10,230,250);
  stroke(0,0,0)
  circle(25,30,50)
  circle(599,30,50)
  fill(250,0,0);
  rect(50, 25, 525, 10)
  //.................................
  fill(10,230,250);
  stroke(0,0,0)
  circle(25,375,50)
  circle(600,375,50)
  fill(250,0,0);
  rect(50, 370, 525, 10)
   //...................................
  rect(20, 350, 10, -295)
  rect(595, 350, 10, -295)
  
  }

function take_snapshot(){
    save("captured.png");
}