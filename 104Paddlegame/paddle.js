function Paddle(location, velocity, col){
  this.loc=location;
  this.vel=velocity;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .9);
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
  }

  //checkEdges()reverses speed when the ball touches an edge

  this.render = function (){
    fill(0,255,0);
    this.rect(this.loc.x, 100);
  }


  //  End of the Ball constructor
