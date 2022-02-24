// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return (movies.map(x => x.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return (movies.filter(x => (x.director === 'Steven Spielberg' && x.genre.includes('Drama'))).length);
  //return (movies.reduce((acc, x) => acc + (x.director === 'Steven Spielberg' && x.genre.includes('Drama')), 0));
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length < 1)
    return (0);
  return (Math.round((movies.filter(x => x.score > 0).reduce((acc, x) => acc + x.score, 0) / movies.length +  Number.EPSILON) * 100) / 100);
  //since movies might include score missing values, correct is:
  //movies = movies.filter(x => x.score > 0);
  //return (Math.round((movies.reduce((acc, x) => acc + x.score, 0) / movies.length +  Number.EPSILON) * 100) / 100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return (scoresAverage(movies.filter(x => x.genre.includes('Drama'))));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return (movies.filter(x => typeof x.year == 'number').sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).sort(((a, b) => a.year - b.year)));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return (movies.filter(x => typeof x.title == 'string').sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).slice(0, 20).map(x => x.title));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return (movies.map(x => { return {...x, duration: Number(x.duration.substring(0, x.duration.indexOf('h'))) * 60 + Number(x.duration.substring(x.duration.indexOf('min') -2, x.duration.indexOf('min')))}}));
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
