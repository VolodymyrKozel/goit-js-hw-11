import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const galleryList = document.querySelector('.gallery-list');
const API_KEY = '42027651-7bedd500762feb24dffc0a2de';
let q = '';
const url = `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;

const simplelightboxOptions = {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
};
const iziToastOptions = {
        class: 'izi-toast-error-style',
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        iconUrl: './img/octagon.svg',
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  galleryList.innerHTML = '';
  q = e.target.elements.search.value;
  fetchImages()
    .then(images => renderImages(images))
    .catch(error => console.log(error));
  form.reset();
}

function fetchImages() {
  console.log(
    `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImages(images) {
  console.log(images);
  if (images.hits == 0) {
    iziToast.error(iziToastOptions);
  } else {
    const markup = images.hits
      .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
        return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="200"/>
          </a>
          <div class="item-info">
          <p class="item-info-p">Likes <span>${likes}</span></p>
          <p class="item-info-p">Views <span>${views}</span></p>
          <p class="item-info-p">Comments <span>${comments}</span></p>
          <p class="item-info-p">Downloads <span>${downloads}</span></p>
          </div>
          </li>`;
      })
      .join('');
    galleryList.insertAdjacentHTML('beforeend', markup);
    let lightbox = new SimpleLightbox('.gallery-list a', simplelightboxOptions);
  }
}
