/* Page Artistes : filtres par jour et recherche accent-insensible sur les cartes artistes. */

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.artists-filters__btn');
    const artistCards = document.querySelectorAll('.artist-card');
    const searchInput = document.querySelector('#artists-search-input');
    const noResultsEl = document.querySelector('.artists-no-results');

    let currentDay = '28';
    let currentQuery = '';

    const normalize = (str = '') => str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

    function applyFilters() {
        const q = normalize(currentQuery);

        let visibleCount = 0;

        artistCards.forEach(card => {
            const matchesDay = card.dataset.day === currentDay;
            if (!matchesDay) {
                card.hidden = true;
                return;
            }

            const name = normalize(card.querySelector('.artist-card__name')?.textContent || '');
            const desc = normalize(card.querySelector('.artist-card__desc')?.textContent || '');
            const matchesText = q === '' || name.includes(q) || desc.includes(q);
            const hide = !matchesText;
            card.hidden = hide;
            if (!hide) visibleCount += 1;
        });

        if (noResultsEl) {
            noResultsEl.hidden = visibleCount > 0;
        }
    }

    function setDay(day) {
        currentDay = day;
        filterButtons.forEach(btn => {
            const isActive = btn.dataset.filterDay === day;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        applyFilters();
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setDay(btn.dataset.filterDay);
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentQuery = e.target.value || '';
            applyFilters();
        });
    }

    setDay(currentDay);
});
