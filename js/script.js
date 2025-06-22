'use strict';

const newFunc = (arr) => {
    if (arr.length === 0) {
        return undefined;
    }
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr = arr.length - 1;
    return firstElement;
}

const arr1 = [1, 2, 3, 4, 5];
const removed1 = newFunc(arr1);
console.log(removed1, arr1);


const newFunc2 = (arr) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

    let arr2 = [1, 2, 3, 4, 5];
    console.log(arr2);
    newFunc2(arr2);