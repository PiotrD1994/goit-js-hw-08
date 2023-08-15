
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery')

for (const item of galleryItems) {
    const htmlString =   `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img 
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
    </li>`
    gallery.innerHTML += htmlString
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionSData: 'alt',
        captionDelay: 250,
        captionPosition:"bottom",
        enableKeyboard: true,
        })