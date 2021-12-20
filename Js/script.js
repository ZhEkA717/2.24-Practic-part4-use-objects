"use strict";



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы уже посмотрели");
        }
    },

    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            // personalMovieDB.genres[i]=prompt(`Ваш любимый жанр ${i+1}`);
            // while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ""){
            //     personalMovieDB.genres[i]=prompt(`Ваш любимый жанр ${i+1}`);
            // }

            this.genres=prompt('Введите любимые жанры через запятую').toLowerCase().split(', ');
            while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ""){
                this.genres=prompt('Введите любимые жанры через запятую').toLowerCase().split(', ');
            }
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            let a = prompt('Один из последних просмотренных фильмов?', "");
            let b = prompt('На сколько оцените его?', "");

            while (!(a != null && a != "" && b != null && b != "" && b.length < 50)) {
                a = prompt('Один из последних просмотренных фильмов?', "");
                b = prompt('На сколько оцените его?', "");
                if ((a != null && a != "" && b != null && b != "" && b.length < 50)) {
                    personalMovieDB.movies[a] = b;
                    break;
                }
            }
        }
    },

    detecPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    toggleVisibleMyDB: function () {
        if (!this.private) {
            this.private = true;
        } else if (this.private) {
            this.private = false;
        }
    }

};

personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);

personalMovieDB.genres.forEach(function(item,i){
    console.log(`Любимый жанр ${i+1} - это ${item}`);
});
