const startAddMovie = document.getElementById('add-movie-btn');
const addMovieModal = document.getElementById('add-modal');
const modalBackdrop = document.getElementById('backdrop');
const cancelAdd = document.getElementById('cancel-add');
const innerAddBtn = document.querySelector('.inner-add-btn');
const userInputs = document.querySelectorAll('input');
const emptyDbText = document.getElementById('entry-text');

const movies = [];

const toggleModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const updateUI = () => {
  if (movies.length === 0) {
    emptyDbText.style.display = 'block';
  } else {
    emptyDbText.style.display = 'none';
  }
};

const renderNewMovie = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
  </div>`;

  const addedMovieCard = document.querySelector('#movie-list');
  addedMovieCard.append(newMovieElement);
};

const clearInputs = () => {
  userInputs.forEach((input) => (input.value = ''));
};

const toggleBackdrop = () => {
  modalBackdrop.classList.toggle('visible');
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values');
    return;
  }

  const newMovie = {
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleModal();
  clearInputs();
  renderNewMovie(newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

const cancelAddMovieHandler = () => {
  toggleModal();
  clearInputs();
};

const backdropClickHandler = () => {
  toggleModal();
  clearInputs();
};

startAddMovie.addEventListener('click', toggleModal);
cancelAdd.addEventListener('click', cancelAddMovieHandler);
modalBackdrop.addEventListener('click', backdropClickHandler);
innerAddBtn.addEventListener('click', addMovieHandler);
