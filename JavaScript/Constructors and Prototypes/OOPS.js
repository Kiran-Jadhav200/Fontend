// var student1 ={
//     name:"Rohan",
//     rollno:12,
//     marks:90,
// };

// var student2 ={
//     name:"Rohan",
//     rollno:12,
//     marks:90,
// };

function createStudent(name, rollno, marks){
    var student1={};
    student1.name=name;
    student1.rollno=rollno;
    student1.marks=marks;
    return student1;
}
var student2 = createStudent("kiran",15,78);
var student3 = createStudent("ta",2,5);
console.log(student1)
