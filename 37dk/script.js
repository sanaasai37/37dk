const menuBtn = document.querySelector('.menu-btn');
const gnavList = document.getElementById('gnav-list');

function closeMenu() {
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    gnavList.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    gnavList.setAttribute('aria-hidden', String(!isOpen));
});

gnavList.addEventListener('click', closeMenu);