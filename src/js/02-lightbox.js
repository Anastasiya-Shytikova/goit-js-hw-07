import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const secondGallery = document.querySelector('.gallery')
    // 1 нашли галерею по класу 2 вызвали масив данных
const galleryMarkup = galleryItems.map(galleryItem => {
    return `<li>
<a class="gallery__item" href="${galleryItem.original}">
    <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
    />
</a>
</li>
`

})
secondGallery.insertAdjacentHTML("beforeend", galleryMarkup.join(""))

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
});