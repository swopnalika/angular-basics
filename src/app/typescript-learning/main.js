function log(message) {
    console.log("message:", message);
}
var message = " hello typescript";
log(message);
var count = '5';
count = 'X';
var numberVar = 5;
var boolVar = true;
var strVar = "abcd";
var anyVar = null;
var numberArray = [1, 2, 3, 4];
console.log(count);
var drawPoint = function (point) {
    // ... draws point
    console.log(point.x, point.y, point.z);
};
var calculatePointDistance = function (point1, point2) {
    // ... draws point
};
var pointFromInterface = { x: 1, y: 2, z: 3 };
drawPoint(pointFromInterface);
var PointClass = /** @class */ (function () {
    function PointClass(x, y, z) {
        var _this = this;
        this.drawPoint = function () {
            // ... draws point
            console.log(_this.x, _this.y, _this.z);
        };
        this.calculatePointDistance = function (anotherPoint) {
            // ... calcualtes point distance
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PointClass.prototype.getx = function () {
        return this.x;
    };
    return PointClass;
}());
var point = new PointClass(5, 6, 7);
point.drawPoint();

