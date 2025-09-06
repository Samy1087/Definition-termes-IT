document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const ul = document.querySelector('nav ul');
    
    header.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', function() {
        ul.classList.toggle('active');
        menuToggle.innerHTML = ul.classList.contains('active') ? '✕' : '☰';
    });
    
    // Fermer le menu quand on clique sur un lien
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            ul.classList.remove('active');
            menuToggle.innerHTML = '☰';
        });
    });
});