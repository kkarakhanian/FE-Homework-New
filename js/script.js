'use strict';

//Task 1
const averageOfNumbers = (arr) => {
  let sum = 0;
  let numberOfElements = 0;
  for (let i = 0; i < arr.length; i++) {
    const elements = arr[i];
    if (typeof elements === 'number' && !isNaN(elements)) {
      sum += elements;
      numberOfElements++;
    }
  }
    if (numberOfElements === 0) {
      console.error('Number of elements must be greater than 0');
    } else {
      return  sum / numberOfElements;
    }
};

const arr= [10, "hello", true, 20, null, 30, undefined, {a: 1}, [5, 6]];
console.log(averageOfNumbers(arr));

//Task 2

const doMath = (x, znak, y) => {
  switch (znak) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      return y !== 0 ? x / y : "Dividing by zero!";
      break;
    case '%':
      return x % y;
      break;
    case '^':
      return Math.pow(x, y);
      break;
  }
};
 const x = +prompt('Please enter first number');
 const znak = prompt('Enter an operator: +, -, *, /, %, ^');
 const y = +prompt('Please enter a second number');
 console.log(doMath( x, znak, y));

//Task 3
const created2DArrayFromUserInput = () => {
  const numberOfRows = +prompt('Please enter rows number');
  const cols = +prompt('Enter the number of elements in each row (internal array)');
  let mainArr = [];

  if (numberOfRows === 0 || numberOfRows <= 0) {
    alert('Please enter a a real positive number');
    return null;
  }
  for (let i = 0; i < numberOfRows; i++) {
    const currentRow = [];
    for (let j = 0; j < numberOfRows; j++) {
      const value = prompt(`Enter the element for position [${i}][${j}]:`);
      currentRow.push(value);
    }
    mainArr.push(currentRow);
  }
  return mainArr;
}
const userArray = created2DArrayFromUserInput();
console.log(userArray);

//Task 4
const deleteSymbols = (mainStr, charsToRemove) => {
  let result = '';
  for (let i = 0; i < mainStr.length; i++) {
    const char = mainStr[i];
    if (!charsToRemove.includes(char)) {
      result += char;
    }
  }
  return result;
}

const mainStr = prompt('Enter two words');
const charsToRemove = prompt('Enter the chars you want to remove');
console.log(deleteSymbols(mainStr, charsToRemove));

