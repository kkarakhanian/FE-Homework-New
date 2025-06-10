const userName = prompt('What is your name?');
console.log(typeof userName);
console.log(`Username: ${userName}`);

const age = prompt('Write your age');
console.log(typeof Number(age));
console.log(`Age: ${age}`);

const userAcceptance = confirm('Do you want to take part in our promo');
console.log(typeof userAcceptance);
console.log(userAcceptance);
if (userAcceptance) {
  alert('Thanks for your help');
} else {
  alert('You chosen No');
}

const userId = 1895043789053n;
const bonusCode = null;
let secondName;

alert(
  `Hello: ${userName}!
Your age: ${age}
Your status ${userAcceptance}`,
);

console.log('Name', userName, typeof userName);
console.log('Age', age, typeof Number(age));
console.log('User status', userAcceptance, typeof userAcceptance);
console.log('User ID', userId, typeof userId);
console.log('Bonus Code', bonusCode, typeof bonusCode);
console.log('SecondName', secondName, typeof secondName);
