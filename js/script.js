"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Ты глянул оч мало фильмаков бро!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ну ты норм глянул бро");
        } else if (personalMovieDB.count >= 30) {
            console.log('Киноман ты мен');
        } else {
            console.log('Errore');
        }
    },


    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Нельзя показать, база данных приватная!");
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');

            if (a === null || a ==='') {
                console.log('Не ввели данные');
                i--;
            } else {
                personalMovieDB.generes[i] = a;
            }


            personalMovieDB.generes.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }

    }

};



