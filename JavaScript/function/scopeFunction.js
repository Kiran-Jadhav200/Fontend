function a(){
b();
console.log("Inside a");
}
function b(){
    c();
    console.log("Inside b");

}
function c(){
console.log("Inside c");
}
a();
console.log("global coxtext");