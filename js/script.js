'use strict';

//indexOf
const findFirstIndex = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
console.log(findFirstIndex([10, 20, 30, 20], 20));
console.log(findFirstIndex([1, 2, 3], 5));

//lastIndexOf
const findLastIndex = (arr, key) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
console.log(findLastIndex([10, 20, 30, 30], 30));
console.log(findLastIndex([10, 20, 30, 30], 5));

//find
const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
const nums = [3, 7, 10, 15];

const found = find(nums, (el) => el > 8);
console.log(found);

//findIndex
const findIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
const numbers = [5, 12, 8, 130, 44];

const index = findIndex(numbers, (el) => el > 100);
console.log(index);

//includes
const findIncludes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
const arr = [1, 3, 5, 7];
const valueToFind = 3;

const result = findIncludes(arr, valueToFind);
console.log(result);

//every
const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}
const arr2 = [2, 3, 6, 8];
console.log(every(arr2, (el) => el % 2 === 0));

//some
const findSome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const arr3 = [1, 3, 5, 8];
const hasEven = arr3.some((el) => el % 2 === 0);
console.log(hasEven);