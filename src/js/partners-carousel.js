// CARROUSEL PARTENAIRES 

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".partners__carousel");
    if (!carousel) return;

    const img = carousel.querySelector(".partners__image");
    const prev = carousel.querySelector(".partners__control--prev");
    const next = carousel.querySelector(".partners__control--next");
    if (!img || !prev || !next) return;

    const images = img.dataset.images.split(",").map(src => src.trim());
    let index = 0;

    const update = () => {
        img.src = images[index];
    };

    next.addEventListener("click", () => {
        index = (index + 1) % images.length;
        update();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        update();
    });
});



