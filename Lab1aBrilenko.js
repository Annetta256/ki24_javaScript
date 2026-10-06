// Завдання 1
function calculateProductTotalPrice(price, quantity) {
    return price * quantity;
}

console.log('calculateProductTotalPrice(): ', calculateProductTotalPrice(50, 3));

// Завдання 2
function convertMsToTimeSpan(totalMs) {
    let hours, minutes, seconds, milliseconds;

    hours = Math.floor(totalMs / 3600000);
    minutes = Math.floor(totalMs / 60000);
    seconds = Math.floor(totalMs / 1000);
    milliseconds = totalMs % 1000;

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}

console.log('convertMsToTimeSpan(): ', convertMsToTimeSpan(3661023));

// Завдання 3
function getNumberSignStr(number) {
    if (number > 0) {
        return "+";
    } else if (number < 0) {
        return "-";
    } else if (number = 0) {
        return "0";
    }
}

console.log('getNumberSignStr(): ', getNumberSignStr(5));

// Завдання 4
function getGradeResult(score) {
    if (score >= 90) {
        return "excellent";
    } else if (score >= 75) {
        return "good";
    } else if (score >= 60) {
        return "satisfactory";
    } else if (score >= 0) {
        return "unsatisfactory";
    } else {
        return "unsatisfactory";
    }
}

console.log('getGradeResult(): ', getGradeResult(95));

// завдання 5
function calculateFactorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log('calculateFactorial(): ', calculateFactorial(5));

// завдання 6
function calculateCartTotal(cartItems) {
    let total = 0;
    const itemCount = cartItems.length;

    for (let i = 0; i < cartItems.length; i++ ) {
        const price = cartItems[i].price;
        const quantity = cartItems[i].quantity;

        total += price * quantity;
    }
    return total;
}

console.log('calculateCartTotal([{10, 2}, {5, 4}]): ', calculateCartTotal([{price: 10, quantity: 2},
    {price: 5, quantity: 4}]));

// завдання 7
// найзручніше було б for, бо в for відома кількість циклів
// while спочатку перевіряє умови, а потім ввиконує сам код. Також while може не виконуватися, якщо умова false
// do while виконує код одразу, а умову перевіряє потім. Він не може не виконатися хоча б один раз
function getBeastNumberSum1() {
    const beastNumber = 666;
    let total = 0;

    for (let i = 1; i <= beastNumber; i++) {
        total += i;
    }

    return total;
}

function getBeastNumberSum2() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (i <= beastNumber) {
        total += i;
        i++;
    }

    return total;
}

function getBeastNumberSum3() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    do {
        total += i;
        i++;
    } while (i <= beastNumber);

    return total;
}

// завдання 7.2
function getBeastNumberSum2() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (true) {
        if (i > beastNumber) {
            break;
        }
    }

    total += i;
    i++;

    return total;
}

function  getBeasNumberSum2_AnotherApproach() {
    const beastNumber = 666;
    let total = 0;
    let i = 1;

    while (i <= beastNumber) {
        total += i;
        i++;
    }
    return total;
}

console.log('getBeastNumberSum1(): ', getBeastNumberSum1());
console.log('getBeastNumberSum2(): ', getBeastNumberSum2());
console.log('getBeastNumberSum3(): ', getBeastNumberSum3());

console.log('getBeastNumberSum2_AnotherApproach(): ', getBeasNumberSum2_AnotherApproach());

// завдання 8
function getDivisibleNumbers(limit, divisor) {
    const result = [];
    let i = 1;

    while (true) {
        if (i > limit) {
            break;
        }

        if (i % divisor === 0) {
            result.push(i);
        }

        i++;
    }
    return result;
}
// помилку це i + 1. Треба було написати або і = і + 1, або і++

console.log('getDivisibleNumbers(20, 3): ', getDivisibleNumbers(20, 3));

// завдання 9
 function getSameDigitNumbers(limit) {
    results = [];

    for (let currentNumber = 1; currentNumber <= limit; currentNumber++) {
        const stringNumber = String(currentNumber);
        let sameNumbers = true;

        for (let i = 1; i <= stringNumber.length; i++) {
            if (stringNumber[i] !== stringNumber[0]) {
                sameNumbers = false;
                break;
            }
        }

        if (sameNumbers && stringNumber.length > 1) {
            results.push(currentNumber);
        }
    }

     return results;
 }

 console.log('getSameDigitNumbers(700): ', getSameDigitNumbers(700));