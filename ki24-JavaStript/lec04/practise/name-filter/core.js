function filterNames(studentNames, filterString) {
    // перевірити кожен елемент з studentNames,
    // на наявність filterString в елементі

    const results = [];

    filterString = filterString.toLowerCase();

    for (let i = 0; i < studentNames.length; i++) {
        const studentName = studentNames[i];
        const studentNameLowerCase = studentName.toLowerCase();
        const isMatch = studentNameLowerCase.includes(filterString);
        if (isMatch) {
            results.push(studentName);
        }
    }

    return results;
}