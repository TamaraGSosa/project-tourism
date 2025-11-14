document.addEventListener('DOMContentLoaded', () => {
    const isIndex = window.location.pathname === '/index.html' || window.location.pathname === '/';
    const navLinks = isIndex ?
        `<a href="src/pages/tips.html">Tips</a>
        <a href="src/pages/acerca.html">Acerca de</a>
        <a href="src/pages/destinos.html">Destinos</a>
        <a href="src/pages/tours.html">Tours</a>
       `
        :
        `<a href="tips.html">Tips</a>
        <a href="acerca.html">Acerca de</a>
        <a href="destinos.html">Destinos</a>
        <a href="tours.html">Tours</a>
        `;

    const logoHref = isIndex ? '/' : '/';
    const headerHTML = `
<header>
    <a href="${logoHref}" class="logo">YENDO SALTA</a>
    <nav class="nav-links">
        ${navLinks}
    </nav>
    <i class="fas fa-bars hamburger" aria-label="Menú de navegación"></i>
</header>
`;

    const footerLinks = isIndex ?
        `<a href="src/pages/preguntas.html">Preguntas Frecuentes</a>
        <a href="src/pages/condiciones_privacidad.html">Condiciones y privacidad</a>
        <a href="src/pages/emergencias.html">Números de Emergencias</a>`
        :
        `<a href="preguntas.html">Preguntas Frecuentes</a>
        <a href="condiciones_privacidad.html">Condiciones y privacidad</a>
      
        <a href="emergencias.html">Números de Emergencias</a>`;

    const floatingButtonHTML = `
<div class="floating-button">
    <button id="floating-btn">Busca destinos</button>
</div>
`;

    const footerHTML = `
<footer>
    <div class="footer-links">
        ${footerLinks}
    </div>
    <div class="social-icons">
        <a href="#" class="fab fa-instagram" aria-label="Instagram"></a>
        <a href="#" class="fab fa-facebook-f" aria-label="Facebook"></a>
        <a href="#" class="fab fa-tiktok" aria-label="TikTok"></a>
    </div>
</footer>
`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', floatingButtonHTML);

    const floatingBtn = document.getElementById('floating-btn');
    floatingBtn.addEventListener('click', () => {
        if (isIndex) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinksEl = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinksEl.classList.toggle('active');
    });
});