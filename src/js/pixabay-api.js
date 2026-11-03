import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
console.log('API key exists:', Boolean(API_KEY));
console.log('API key length:', API_KEY?.length);

export function getImagesByQuery(query) {
  return axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(response => response.data);
}