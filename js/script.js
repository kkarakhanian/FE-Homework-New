'use strict';

//apply
Function.prototype.myApply = function(context, args) {
    context = context || window;
    context.temp = this;
    const result = context.temp(args[0], args[1], args[2]);
    delete context.temp;
    return result;
}
function sayHi(a, b) {
    console.log(this.name, a, b);
}
let user = { name: "Lena" };
sayHi.myApply(user, [1, 2]);

//bind
Function.prototype.myBind = function(context) {
    const self = this;
    return function(a, b) {
        context.temp = self;
        const result = context.temp(a, b);
        delete context.temp;
        return result;
    };
}
function greet(a, b) {
    console.log(this.name, a, b);
}

const user2 = { name: "Max" };
const bound = greet.myBind(user2);
bound("Hi", "!");