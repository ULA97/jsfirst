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



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[a] = b; // Лучше использовать две квадратные скобки вместо точки, так мы сможем записать любое значение
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);