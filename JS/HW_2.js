"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// цикл for
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          personalMovieDB.movies [a] = b;

    if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        personalMovieDB.movies [a] = b;
        console.log('done');  
    } else {
        console.log('Error');
        i--;
    }
  }

// цикл do
// let i = 0;
// do {const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies [a] = b;
//         console.log('done');  
//     } else {
//         console.log('Error');
//         i--;
//     } 
// }       
//         while (i <2 );


// цикл while
// let i = 0;
// while (i < 2 ){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies [a] = b;
//         console.log('done');  
//     } else {
//         console.log('Error');
//         i--;
//     } 
// } 






if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}





console.log(personalMovieDB);
