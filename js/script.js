'use strict';

function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const length = 10;
const characters = 'abcdefg1234567';
const key = generateKey(length, characters);
console.log(key);
