var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    "2":"two",
    address :{
        city:"Delhi",
        state:"Delhi"
    }
};
var keys = Object.getOwnPropertyNames(student);
console.log(keys);
//  for(var prop in student){
//      console.log(prop, student[prop]);
//  }
console.log(student.address);