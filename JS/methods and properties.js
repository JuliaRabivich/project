"use strict";
// свойства
const arr = [1, 2, 3];
console.log(arr.length);



// МЕТОДЫ ДЛЯ РАБОТЫ СО СТРОКАМИ
const str = 'teXt';
// console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));


// как мы можем поменять или модифицировать строку, если она не изменяема. 
// Мы будем использовать методы которые так взаимодействуют со строками. Этих методов 3.
// 1. Метод .slice
const logg = 'Hello world!';
console.log(logg.slice(6, 11));
//  или console.log(logg.slice(6)); ,а остальное вырезается до конца

// 2. Метод .substring (похож на метод .slice, но нельзя применить отрицательные значения)
console.log(logg.substring(6, 11)); 

// 3. Метод .substr. Метод говорит сколько символов необходимо вырезать (это указывается во втором аргументе)
console.log(logg.substr(6, 5));


// МЕТОДЫ ДЛЯ РАБОТЫ С ЧИСЛАМИ
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));









