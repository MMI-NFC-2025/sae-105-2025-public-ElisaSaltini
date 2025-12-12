/* Pages focus artistes : carrousel manuel suivant/précédent pour changer les visuels des focus. */

document.addEventListener("DOMContentLoaded", () => {

    const img = document.querySelector(".carousel__image img");
    if (!img) return;

    const images = img.dataset.images.split(",").map(src => src.trim());

    const prev = document.querySelector(".carousel__btn--prev");
    const next = document.querySelector(".carousel__btn--next");

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


