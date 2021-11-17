 class Rectangle {
 constructor (height, width) {
     this.Height = height;
     this.Width = width;
 }
//  getHeight () {
    //  return this.height
//  }
//  getWidth () {
    //  return this.width
//  }
//  getarea () {
    //  this.height * this.width
//  }
get area () {
    return this.CalArea();
}
CalArea(){
    return this.Height*this.Width
}

}
const square = new Rectangle (5,15)
console.log(Rectangle)

