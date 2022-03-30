const startAddMovie = document.getElementById('add-movie-btn');
const addMovieModal = document.getElementById('add-modal');
const modalBackdrop = document.getElementById('backdrop');
const cancelAdd = document.getElementById('cancel-add');

const toggleModal = () => {
  addMovieModal.classList.toggle('visible');
  modalBackdrop.classList.toggle('visible');
};

startAddMovie.addEventListener('click', toggleModal);
cancelAdd.addEventListener('click', toggleModal);
