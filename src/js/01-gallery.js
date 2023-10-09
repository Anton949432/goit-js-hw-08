import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `)
    .join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
});

lightbox.on('show.simplelightbox', function () {
    document.addEventListener('keydown', closeModalOnEscape);
});

lightbox.on('close.simplelightbox', function () {
    document.removeEventListener('keydown', closeModalOnEscape);
});

function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        lightbox.close();
    }
}