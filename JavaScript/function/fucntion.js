function showAlert(msg){
    console.log(msg);
}

showAlert("Hello");

function sum(a,b){
    console.log(a,b);
    return a+b;
}
var result =sum(12,5,6);
console.log(result);

var name = "global";
function scopeDemo(){
    var name = "function";
    console.log(name);
}

scopeDemo();
console.log(name);
