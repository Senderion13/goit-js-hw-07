import { galleryItems } from './gallery-items.js';

let gallery = document.querySelector(".gallery");

galleryItems.map((item) => {
    gallery.innerHTML += `<a class="gallery__item" href="${item.original}"><img captionsDelay="250ms" title="${item.description}" alt="${item.description}" data-source="${item.original}" src="${item.preview}" width="100%" class="gallery__image" /></a>`
})

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});
lightbox.on('show.simplelightbox');