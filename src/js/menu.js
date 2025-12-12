(() => {
    const html = document.documentElement;
    const menuButtons = document.querySelectorAll('.header__menu-btn');
    const overlay = document.querySelector('.menu-overlay');

    if (!menuButtons.length || !overlay) return;

    const closeTargets = overlay.querySelectorAll('[data-menu-close]');
    const links = overlay.querySelectorAll('a');

    const setExpanded = (isOpen) => {
        menuButtons.forEach((btn) => btn.setAttribute('aria-expanded', String(isOpen)));
        overlay.setAttribute('aria-hidden', String(!isOpen));
    };

    const openMenu = () => {
        html.classList.add('menu-open');
        setExpanded(true);
    };

    const closeMenu = () => {
        html.classList.remove('menu-open');
        setExpanded(false);
    };

    menuButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const isOpen = html.classList.contains('menu-open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    });

    closeTargets.forEach((el) => el.addEventListener('click', closeMenu));
    links.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
})();
