
function log( message){
  console.log(  "message:", message);

}
var message = " hello typescript";

log( message);

let count: string = '5';
count = 'X';

let numberVar: number = 5;
let boolVar: boolean = true;
let strVar: string = "abcd";
let anyVar: any = null;
let numberArray: number[] = [1,2,3,4];


console.log(count);


interface Point {
  x: number,
  y: number,
  z: number
}
let drawPoint = (point: Point) => {
  // ... draws point
  console.log(point.x,point.y,point.z)
}
let calculatePointDistance = (point1: Point, point2: Point) => {
  // ... draws point
}
let pointFromInterface: Point = {x: 1, y: 2, z: 3};
drawPoint(pointFromInterface)

class PointClass {
  private x: number;
  y: number;
  z: number;
  constructor( x: number , y: number, z: number){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  drawPoint = () => {
      // ... draws point
      console.log(this.x,this.y,this.z);
  }

  calculatePointDistance = (anotherPoint: Point) => {
      // ... calcualtes point distance
  }
  getx(){
     return this.x;
  }
}
let point : PointClass = new PointClass( 5,6,7);
point.drawPoint();

