// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
const takeUlGallery = document.querySelector('.gallery');
const galeryImeg = createGalleryImag(galleryItems);
function createGalleryImag(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
         />
      </a>
    </li>`;
    })
    .join('');
}

takeUlGallery.insertAdjacentHTML('beforeend', galeryImeg);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: 'true',
  captionsData: 'alt',
  //   captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);
