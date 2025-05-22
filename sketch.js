let planet;
let aliens = [];
let gameOver = false;
let numAliens = 5;

function setup() {
  createCanvas(800, 600);
  planet = new Planet();
  
  for (let i = 0; i < numAliens; i++) {
    aliens.push(new Alien(random(width), random(height)));
  }
}

function draw() {
  background(20);
  
  if (!gameOver) {
    planet.update();
    planet.display();
    
    for (let alien of aliens) {
      alien.seek(planet.pos);
      alien.update();
      alien.display();
      
      if (alien.hits(planet)) {
        gameOver = true;
      }
    }
    
    fill(255);
    textSize(20);
    text("Escape the Aliens!", 10, 30);
  } else {
    fill(255, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

// Planet class
class Planet {
  constructor() {
    this.r = 20;
    this.pos = createVector(mouseX, mouseY);
  }
  
  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  
  display() {
    fill(100, 200, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

// Alien class
class Alien {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.maxSpeed = 3;
    this.maxForce = 0.1;
    this.r = 15;
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);
    
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    
    this.acc.add(steer);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    fill(255, 50, 50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  hits(planet) {
    let d = dist(this.pos.x, this.pos.y, planet.pos.x, planet.pos.y);
    return d < this.r + planet.r;
  }
}
