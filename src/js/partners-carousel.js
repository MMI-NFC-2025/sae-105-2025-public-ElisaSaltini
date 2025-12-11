// CARROUSEL PARTENAIRES 

document.addEventListener("DOMContentLoaded", () => {

    const img = document.querySelector(".partners-carousel .carousel__image img");
    if (!img) return;

    const images = img.dataset.images.split(",").map(src => src.trim());

    const prev = document.querySelector(".partners-carousel .carousel__btn--prev");
    const next = document.querySelector(".partners-carousel .carousel__btn--next");

    let index = 0;

    function update() {
        img.src = images[index];
    }

    next.addEventListener("click", () => {
        index = (index + 1) % images.length;
        update();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        update();
    });

});



