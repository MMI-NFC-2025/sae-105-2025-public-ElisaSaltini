document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.scene-filters__btn');
    const lists = document.querySelectorAll('.scene-artists-list');

    function showDay(day) {
        filterButtons.forEach(btn => {
            const isActive = btn.dataset.filterDay === day;
            btn.classList.toggle("is-active", isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        lists.forEach(list => {
            list.hidden = list.dataset.day !== day;
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showDay(btn.dataset.filterDay);
        });
    });

    // Par défaut : 28 octobre
    showDay("28");
});
