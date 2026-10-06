/*
В функцію передається масив студентів, а також параметр який визначає
як змінити оцінку кожного студента, як коефіцієнт. Тобто можна передати
значення, наприклад, 1.1, і оцінка кожного студента збільшиться на 10 відсотків.
*/

function adjustScore(students, k) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        student.averageScore = student.averageScore * k;
    }
}

function copyArray(array) {
    if (!array) {
        return array;
    }

    const copiedArray = [];

    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        const elType = typeof el;
        if (elType === "object") {
            const elCopy = Object.assign({}, el);
            copiedArray.push(elCopy);
        } else {
            copiedArray.push(el);
        }
    }

    return copiedArray;
}