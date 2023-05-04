const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDispaly = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && yearInStorage) {
movieTitleToDisplay.textContent = titleInStorage;
movieYearToDispaly.textContent = yearInStorage;
container.style.backgroundImage = `linear-gradient(rgba(48, 48, 187, 0.541), rgba(99, 61, 61, 0.534)), 
url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
   let movieTitleInput = movieTitle.value;
   let posterUrlInput = moviePosterUrl.value;
   let yearInput = movieYear.value;
   localStorage.setItem('title', movieTitleInput);
   localStorage.setItem('imageUrl', posterUrlInput);
   localStorage.setItem('year', yearInput);
   movieTitleToDisplay.textContent = movieTitleInput;
   movieYearToDispaly.textContent = yearInput;
   container.style.backgroundImage = `linear-gradient(rgba(48, 48, 187, 0.541), rgba(99, 61, 61, 0.534)),
   url('${posterUrlInput}')`;
   movieTitle.value = '';
   moviePosterUrl.value = '';
   movieYear.value = '';
});