'use strict';

function padString(string, numberString, symbolString, symbolBoolean) {
  if (typeof string !== 'string') {
    return 'Error: The first argument must be a string.';
  }
  if (typeof numberString !== 'number') {
    return 'Error: The second argument must be a number.';
  }
  if (numberString < 0) {
    return 'Error: The target length cannot be negative.';
  }
  if (string.length < numberString && (typeof symbolString !== 'string' || symbolString.length !== 1)) {
    return 'Error: The third argument must be a string of 1 character.';
  }
  if (symbolBoolean !== undefined && typeof symbolBoolean !== 'boolean') {
    return 'Error: The fourth argument must be a Boolean value.';
  }

  const currentLength = string.length;

  if (currentLength === numberString) {
    return string;
  } else if (currentLength < numberString) {
    const paddingNeeded = numberString - currentLength;
    const padding = symbolString.repeat(paddingNeeded);
    const padLeft = symbolBoolean === true;

    if (padLeft) {
      return padding + string;
    } else {
      return string + padding;
    }
  } else {
    return string.substring(0, numberString);
  }
}
console.log(padString('hello', 2));
