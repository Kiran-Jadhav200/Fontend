function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){
    //     return this.price;
    // }
}
Vehicle.prototype.getPrice = function(){
    return this.price;
}

var vehicle1 = new Vehicle(2,500000);
var vehicle2 = new Vehicle(4,5000000);
console.log(vehicle1,vehicle2);
var obj ={};
var obj = new Object();
