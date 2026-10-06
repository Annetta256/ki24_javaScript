// function getStudentsByGroup(students, group) {
//     const result = [];
//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         if (student.group == group) {
//             result.push(student);
//         }
//     }
//     return result;
// }

function getStudentsByGroup(students, group) {
    return students.filter(function (student) {
        return student.group === group;
    });
}