var screen = 0;
var y=-20;
var x=200;
var Speed = 2;
var score= 0;
let p1;

function setup() {
  createCanvas(600, 400);
  p1 = new player(x, y, 20, 255);
}

function draw() {
	if(screen == 0){
    p1.startScreen()
      
  }else if(screen == 1){
  	p1.gameOn()
  }else if(screen==2){
  	p1.endScreen()
  }	
}

class player{
  constructor( x, y, size, warna){
    this.x = x;
    this.y = y;
    this.size = size;
    this.warna = warna;
  }
  
startScreen(){
		background(0, 0, 0)
		fill(255)

		textAlign(CENTER);
		text('TANGKAP BOLA', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
        text('S.A Syailendra Wangsa Suharyo', width / 2, height /20)
        text('2117051086', width /2, height / 10)
  
		p1.res();
}
  
gameOn(){
	background(0)
    text("score = " + score, 30,20)
    ellipse(x,y,20,20)
    rectMode(CENTER)
    rect(mouseX,height-10,50,30)
	y+= Speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    Speed+=0.5
    score+= 1
  }
	if(y==-20){
  	p1.pickRandom();
  }
}

pickRandom(){
	    x= random(20,width-20)
}

endScreen(){
		background(150)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	    text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
}

 

res(){
	score=0;
  	Speed=2;
  	y=-20;
}

 }
function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}