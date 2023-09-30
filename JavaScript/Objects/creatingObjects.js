var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    "2":"two"
};
console.log(student.name);
console.log(student[2]);
function printPropety(obj,prop){
    console.log(obj[prop]);
}
printPropety(student,2)