"use strict";


let num = 20;
function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}
showFirstMessage('Hello world!');
console.log(num);

// function calc(a, b){
//     return(a + b);
// }

// console.log(calc(2, 3));
// console.log(calc(3, 6));
// console.log(calc(10, 3));

// function declaration. Ее особенность в том, что она работает до того, как она была вызвана.
function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// function expression
const logger = function() {
    console.log('Hello!');
};
logger();

// стрелочная функция
// const calc = (a, b) => { return a + b };

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
