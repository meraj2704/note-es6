const student = {
    name : 'zayed oyshik',
    age : 15,
    class : 'ten',
    marks : {
        math : 78,
        physics : 89,
        chemistry : 65
    },
}
const marks = student.marks;
const math = student.marks.math;
console.log(marks);
console.log(math);
const chemistry = student['marks']['chemistry'];
console.log(chemistry);