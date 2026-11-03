import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
  iziToast.warning({
    title: 'Увага',
    message: 'Please enter a search query!',
  });
  return;
  }

 getImagesByQuery(query)
  .then(data => {
    console.log(data);
    clearGallery();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again!',
    });
    console.log(error);
  });
});