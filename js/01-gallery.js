import { galleryItems } from './gallery-items.js';

let gallery = document.querySelector(".gallery");
let myModal;

galleryItems.map((item) => {
    gallery.innerHTML += `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img alt="${item.description}" data-source="${item.original}" src="${item.preview}" width="100%" class="gallery__image" /></a></div>`
})

let func = (e) => {
    console.log("a");
    if(e.code === "Escape"){
        myModal.close();
        gallery.removeEventListener("keydown", func)
    }
}

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    myModal = basicLightbox.create(`
        <div>
            <img
                src="${event.target.dataset.source}"
                alt="${event.target.alt}"
                height="700vh"
            />
        </div>
    `)
    myModal.show();
    gallery.addEventListener("keydown", func);
})



