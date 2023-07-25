let functionGenrator = (functionName) => {
    switch (functionName) {
        case "addNumbers": return (addition)
        case "subtractNumbers": return (subtract)
        case "multiplyNumbers": return (multiply)
        case "divideNumbers": return (division)
        default: return "Operation not available"
    }
}

let addition = (...numberArray) => {
    let sum = 0
    console.log(numberArray);
    for (let index = 0; index < numberArray.length; index++) {
        console.log(Number.isNaN(numberArray[index]));
        if (!isNaN(numberArray[index])) {
            sum += numberArray[index]
        }
        else {
            return functionGenrator("idk")
        }

    }
    return sum
}

let subtract = (...numberArray) => {
    let subtract = 0
    console.log(numberArray);
    for (let index = 0; index < numberArray.length; index++) {
        console.log(Number.isNaN(numberArray[index]));
        if (!isNaN(numberArray[index])) {
            subtract -= numberArray[index]
        }
        else {
            return functionGenrator("idk")
        }

    }
    return subtract
}

let multiply = (...numberArray) => {
    let multiplication = 1
    console.log(numberArray);
    for (let index = 0; index < numberArray.length; index++) {
        console.log(Number.isNaN(numberArray[index]));
        if (!isNaN(numberArray[index])) {
            multiplication *= numberArray[index]
        }
        else {
            return functionGenrator("idk")
        }

    }
    return multiplication
}

let division = (...numberArray) => {
    let divide = 1
    // console.log(numberArray);
    for (let index = 0; index < numberArray.length; index++) {
        // console.log( isNaN(numberArray[index]));
        if (!isNaN(numberArray[index])) {
            divide /= numberArray[index]
            // console.log(index);
        }
        else {
            // console.log("ic");
            return functionGenrator("idk")
        }

    }
    return divide
}

// let tempArray = [1,2,3]
// console.log(typeof tempArray[0]);
// let check  = functionGenrator("addNumbers")
// console.log(check(...tempArray))

// let tempArray = [1,2,3]
// console.log(typeof tempArray[0]);
// let check  = functionGenrator("subtractNumbers")
// console.log(check(...tempArray))

// let tempArray = [1,2,3,4]
// console.log(typeof tempArray[0]);
// let check  = functionGenrator("multiplyNumbers")
// console.log(check(...tempArray))

let tempArray = [1, 2, "as", 4]
let check = functionGenrator("divideNumbers")
console.log(check(...tempArray))