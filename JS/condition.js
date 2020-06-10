if (4 == 9) {
    console.log('ok!');
} else {
    console.log('Error!');
}



// const num = 50;
// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Too much!');
// } else {
//     console.log('ok!');
// }

// Тернарный оператор
// const num = 15;
// (num === 50) ? console.log('ok!') : console.log('Error!');


// Switch проверяет только на строгое соответствие
const num = 49;
switch (num) {
    case 49: 
    console.log('Неверно');
    break;
    case 100:
    console.log('Неверно');
    break;
    case 50:
    console.log('В точку');
    break;
    default:
    console.log('Не в этот раз');
    break;
}