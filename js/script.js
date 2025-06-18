'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const homeArr = (arr) => {
  const newArr = [];
  if (arr.length === 0) {
    return "It's an empty array!";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
      if (newArr.length > 0) {
        return newArr;
      } else {
        return null;
      }
}

console.log(homeArr(arr));