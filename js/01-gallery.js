import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const firstGallery = document.querySelector('.gallery')
const galleryMarkup = galleryItems.map(galleryItem => {
    return `
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
  </a>
`
})
firstGallery.insertAdjacentHTML("beforeend", galleryMarkup.join(""))


const OnPictureClick = (event => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}">
`)

    instance.show()
})

firstGallery.addEventListener('click', OnPictureClick)