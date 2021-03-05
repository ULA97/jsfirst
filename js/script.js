"use strict";

/* const category = 'toys';

console.log(`https://someurl.com/${category}/5/`);

const user = 'Ivan';

alert(`Привет, ${user}`); */
/* 
let incr = 10,
    decr = 10; */

/* incr++; */ // Увеличивает на 1 инкримент префиксная это когда ты ставишь до переменной, постфиксная это когда ты ставишь после

/* decr--; */ // Уменьшает на 1 декримент

/* console.log(incr); 
console.log(decr); */
/* 
console.log(5%2); */ //% Возвращает остаток от деления
/* 
console.log(2*4 == 8); */ // == два знака сравнивают, а не один . Три знака равенста - это строгое сравнение

/* const isChecked = true, */ // Оператор (И) возвращает правду только если оба является истиной 
      /* isClose = true; */  // Оператор ИЛИ наоборот возращает истину если хотя бы одно равно правдой ||
                    // Оператор ! отрицание возращает правду там, где использовалась ложь 

/* console.log(isChecked && isClose); */





/* if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}
 */

/* if (num < 49) {
    console.log('Erroe');
} else if (num > 100) {
    console.log('Many');
} else {
    console.log('ok!');
}

(num == 50) ? console.log('ok!') : console.log('Erroe'); */ // тернарный оператор
/* 
switch (num) {
    case 49: 
        console.log('None');
        break;
    case 100: 
        console.log('None');
        break;
    case 50:
        console.log('ON apple');
        break;
    default:
        console.log('Не в этот раз');
        break;
} */

//ЦИкл пока меньше 55 будем прибавлять по 1 к переменной

/* let num1 = 50;

while (num1 < 55) {
    console.log(num1);
    num1++;
} */


/* 
do {
    console.log(num1);
    num1++;
}
while (num1 < 55); */


// Цикл for

/* for (let i = 1; i < 10; i++) {
    if (i === 6) { */
        /* break; */
/*         continue;
    }

    console.log(i);
} */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

for (let i = 0; i <2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

/* let i = 0;

while (i  < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          i++;
          personalMovieDB.movies[a] = b;
}  */

if (personalMovieDB.count < 10) {
    console.log("Ты глянул оч мало фильмаков бро!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ну ты норм глянул бро");
} else if (personalMovieDB.count >= 30) {
    console.log('Киноман ты мен');
} else {
    console.log('Errore');
}

console.log(personalMovieDB);


