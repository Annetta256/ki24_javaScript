const students = [
    {
        id: 1,
        name: "John Doe",
        age: 18,
        group: "KI-24",
        averageScore: 91,
        tags: ["a", "b", "c"]
    },
    {
        id: 2,
        name: "Sandra Smith",
        age: 19,
        group: "KI-24",
        averageScore: 84,
        tags: ["a", "b", "c"]
    },
    {
        id: 3,
        name: "Bruce Wayne",
        age: 18,
        group: "KI-23",
        averageScore: 96,
        tags: ["a", "b", "c"]
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

const simpleArray = [[1,4],[2,5],[3,6]];

const simpleArrayCopy = copyArray(simpleArray);

console.log(simpleArrayCopy);

const studentsCopy = copyArray(students);

console.log(studentsCopy);