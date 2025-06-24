'use strict';

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

//1
const sumAndPositive = (arr) => {
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];

        if (number > 0) {
            sum += number;
            amount += 1;
        }
    }
    return { sum: sum, count: amount };
}
const result = sumAndPositive(arr);
console.log("Sum of positive elements:", result.sum);
console.log("Amount of positives elements:", result.count);


//2
const minElAndSequenceNum = (arr) => {
    let minValue = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
      if(arr[i] < minValue) {
          minValue = arr[i];
          index = i;
        }
    }
    return { minValue, index };
}
console.log(minElAndSequenceNum(arr));

//3
const maxElAndSequenceNum = (arr) => {
    let maxValue = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        if(arr[i] > maxValue) {
            maxValue = arr[i];
            index = i;
        }
    }
    return { maxValue, index };
}
console.log(maxElAndSequenceNum(arr));

//4
const negativeEl = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];

        if(arr[i] < 0) {
            count += 1;
        }
    }
return count;
}
console.log(negativeEl(arr));

//5
const neparAndPositive = (arr) => {
    let finalCount = 0;
    for (let i = 0; i < arr.length; i++) {
        const potochniyNum = arr[i];

        if(arr[i] > 0 && potochniyNum % 2 !== 0) {
            finalCount += 1;
        }
    }
    return finalCount;
}
console.log(neparAndPositive(arr));

//6
const parAndPositive = (arr) => {
    let finalCount = 0;
    for (let i = 0; i < arr.length; i++) {
        const potochniyNum = arr[i];

        if(arr[i] > 0 && potochniyNum % 2 === 0) {
            finalCount += 1;
        }
    }
    return finalCount;
}
console.log(parAndPositive(arr));

//7
const sumOfParEl = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if(arr[i] > 0 && value % 2 === 0) {
            sum += value;
        }
    }
    return sum;
}
console.log(sumOfParEl(arr));

//8
const sumOfNeparEl = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const parValue = arr[i];

        if(arr[i] > 0 && parValue % 2 !== 0) {
            sum += parValue;
        }
    }
    return sum;
}
console.log(sumOfNeparEl(arr));

//9
const dobOfPositive = (arr) => {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        const zminna  = arr[i];

        if(arr[i] > 0) {
            sum *= zminna;
        }
    }
    return sum;
}
console.log(dobOfPositive(arr));

//10
const findTheBiggest  = (arr) => {
    let theBiggest = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== theBiggest) {
    arr[i] = 0;
}
    }
    return arr;
}
console.log(findTheBiggest(arr));