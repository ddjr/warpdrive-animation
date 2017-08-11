// David Daly - github.com/ddjr
// Created 2017 - Chicago IL
var stars = []
var numStars = 400
var speed
function setup() {
  createCanvas(600,600)
  speed = 1
  for(var i=0; i < numStars; i++) {
    stars[i] = new Star();
  }
}
function draw() {
  speed = map(mouseX, 0,width, -1,30)
  background(0)
  translate(width/2, height/2)
  for(var i=0; i < stars.length; i++) {
    stars[i].update()
    stars[i].show()
  }
}
