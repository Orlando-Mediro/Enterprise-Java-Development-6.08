// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map( movie => movie.director );
    return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.reduce((accumulator, movie) => {

        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
            return accumulator + 1;

        return accumulator;

    }, 0);
    return spielbergDramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let total = 0;
    let result = moviesArray.map( movie => total += movie.score);
    return result/ moviesArray.lenght;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const averageScores = moviesArray.map(movie => {
        const totalScore = movie.score.reduce((sum, score) => sum + score, 0);
        return totalScore / movie.score.lenght;
    });

    return averageScores;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedMovies = [...moviesArray].sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }

        return a.year - b.year;
    });

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray]
    .sort((a,b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(moviesArray => moviesArray.title);

    return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
