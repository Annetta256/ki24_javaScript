const students = [
    {
        id: 1,
        name: "John Doe",
        age: 18,
        group: "KI-24",
        averageScore: 91
    },
    {
        id: 2,
        name: "Sandra Smith",
        age: 19,
        group: "KI-24",
        averageScore: 84
    },
    {
        id: 3,
        name: "Bruce Wayne",
        age: 18,
        group: "KI-23",
        averageScore: 96
    },
    {
        id: 4,
        name: "Andriy Shevchenko",
        age: 47,
        group: "KI-25",
        averageScore: 65
    },
    {
        id: 5,
        name: "Cristiano Ronaldo",
        age: 39,
        group: "KI-24",
        averageScore: 71
    }
];

let filteredStudents = getStudentsByGroup(students, "KI-24");
console.log(filteredStudents);

filteredStudents = getStudentsByGroup(students, "KI-30");
console.log(filteredStudents);

filteredStudents = getStudentsByGroup(students, "KI-23");
console.log(filteredStudents);