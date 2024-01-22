const body = document.body;
const menu = document.querySelector('[data-menu]');
const toggleMenuControls = document.querySelectorAll('[data-menu-toggle]');
const closeMenuControls = document.querySelectorAll('[data-menu-close]');
const content = document.querySelector('main');

function toggleMenu(close) {
    const force = close !== undefined ? !close : undefined;

    menu.classList.toggle('is-open', force);
    content.classList.toggle('menu-open', force);
    body.classList.toggle('scroll-lock', force);
}

function onBackdropClick(event) {
    if (event.target.closest('[data-menu]')) {
        return;
    }

    document.body.removeEventListener('click', onBackdropClick, true);
    toggleMenu(true);
}

function onMenuToggle(close) {
    if (menu.classList.contains('is-open')) {
        document.body.removeEventListener('click', onBackdropClick, true);
        toggleMenu(close);

        return;
    }

    document.body.addEventListener('click', onBackdropClick, true);
    toggleMenu(close);
}

export function initMenu() {
    toggleMenuControls.forEach((control) => control.addEventListener('click', () => onMenuToggle()));
    closeMenuControls.forEach((control) => control.addEventListener('click', () => onMenuToggle(true)));
}
