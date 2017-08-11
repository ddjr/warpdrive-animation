class Star {
  constructor() {
    this.r = 3
    this.reset()
    this.z = random(width)
  }
  reset() {
    this.x = random(-width/2,width/2)
    this.y = random(-height/2, height/2)
    this.z = width
    this.pz = this.z
  }
  update() {
    this.z -= speed
    if(this.z < 1) {
      this.reset()
    }
    this.mapto2D()
  }
  mapto2D() {
    this.zx = map(this.x/this.z, 0,1, 0,width)
    this.zy = map(this.y/this.z, 0,1, 0,height)
    this.zr = map(this.z, 0,width, 5,0)
  }
  show() {
    fill(255)
    noStroke()
    ellipse(this.zx, this.zy, this.zr*2, this.zr*2)
  }
}
