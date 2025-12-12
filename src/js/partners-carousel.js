/* Accueil : carrousel partenaires avec transition douce, autoplay et pause au survol. */

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".partners__carousel");
    if (!carousel) return;

    const img = carousel.querySelector(".partners__image");
    const prev = carousel.querySelector(".partners__control--prev");
    const next = carousel.querySelector(".partners__control--next");
    if (!img || !prev || !next || !img.dataset.images) return;

    const images = img.dataset.images.split(",").map((src) => src.trim()).filter(Boolean);
    let index = 0;
    let timer = null;

    const swapTo = (newIndex) => {
        img.classList.add("is-swapping");
        window.setTimeout(() => {
            index = (newIndex + images.length) % images.length;
            img.src = images[index];
            img.classList.remove("is-swapping");
        }, 120);
    };

    const goNext = () => swapTo(index + 1);
    const goPrev = () => swapTo(index - 1);

    const startAuto = () => {
        if (timer) return;
        timer = window.setInterval(goNext, 3500);
    };

    const stopAuto = () => {
        if (!timer) return;
        window.clearInterval(timer);
        timer = null;
    };

    next.addEventListener("click", () => {
        stopAuto();
        goNext();
    });

    prev.addEventListener("click", () => {
        stopAuto();
        goPrev();
    });

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    startAuto();
});



