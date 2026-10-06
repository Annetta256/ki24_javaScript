const studentNames = [
    "John Doe",
    "John Lennon",
    "Donald Trump",
    "Danny Carey",
    "Anton Ptushkin",
    "Ivan Lekov",
    "Vasyl Dovbysh",
    "Andriy Burmaldin",
    "Misha Lebiga",
    "Alla Nizhenko",
    "Jennifer Lawrence",
];

const filterString = "Va";
const filteredStudentNames = filterNames(studentNames, filterString);

for (let studentName of filteredStudentNames) {
    console.log(studentName);
}