/* Page scène Ubuntu : onglets de jour (28/29) pour afficher les artistes correspondants. */

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.scene-filters__btn');
    const lists = document.querySelectorAll('.scene-artists-list');

    function showDay(day) {
        // Activer bouton
        filterButtons.forEach(btn => {
            const active = btn.dataset.filterDay === day;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-selected', active);
        });

        // Afficher la liste du jour
        lists.forEach(list => {
            list.hidden = list.dataset.day !== day;
        });
    }

    // Ajout des événements
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showDay(btn.dataset.filterDay);
        });
    });

    // Afficher par défaut 28 octobre
    showDay('28');
});
