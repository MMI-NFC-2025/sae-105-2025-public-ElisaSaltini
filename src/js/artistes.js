document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.artists-filters__btn');
    const artistCards = document.querySelectorAll('.artist-card');

    function showDay(day) {
        filterButtons.forEach(btn => {
            const isActive = btn.dataset.filterDay === day;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        artistCards.forEach(card => {
            card.hidden = card.dataset.day !== day;
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showDay(btn.dataset.filterDay);
        });
    });

    showDay('28');
});
