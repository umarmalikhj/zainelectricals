function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.querySelector('.menu-toggle');
    const isOpen = menu.classList.toggle('open');

    toggle.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('mobile-menu').classList.contains('open')) {
        toggleMobileMenu();
    }
});