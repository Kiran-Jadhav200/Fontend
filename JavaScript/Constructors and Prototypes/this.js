'use strict'
function demo(){
    console.log(this);
}
demo();

 var demo2 = function(){
    console.log(this);
}


var obj ={
    'prop': 12,
    'print': function(){
        console.log(this);
    }
}
obj.print();
demo.call(obj);