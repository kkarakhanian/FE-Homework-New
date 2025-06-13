"use strict";

const userName = prompt('What is your name?');

function greetUser() {
  return `Привіт, ${userName}!`;
}
alert(greetUser());
