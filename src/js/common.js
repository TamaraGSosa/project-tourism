document.addEventListener('DOMContentLoaded', () => {

    const base = "/project-tourism/";

    const navLinks = `
        <a href="${base}src/pages/tips.html">Tips</a>
        <a href="${base}src/pages/acerca.html">Acerca de</a>
        <a href="${base}src/pages/destinos.html">Destinos</a>
        <a href="${base}src/pages/tours.html">Tours</a>
    `;

    const headerHTML = `
<header>
    <a href="${base}" class="logo">YENDO SALTA</a>
    <nav class="nav-links">
        ${navLinks}
    </nav>
    <i class="fas fa-bars hamburger" aria-label="Menú de navegación"></i>
</header>
`;

    const footerLinks = `
        <a href="${base}src/pages/preguntas.html">Preguntas Frecuentes</a>
        <a href="${base}src/pages/condiciones_privacidad.html">Condiciones y privacidad</a>
        <a href="${base}src/pages/emergencias.html">Números de Emergencias</a>
    `;

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
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-tiktok"></a>
    </div>
</footer>
`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', floatingButtonHTML);

    const floatingBtn = document.getElementById('floating-btn');
    floatingBtn.addEventListener('click', () => {
        window.location.href = base;
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinksEl = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinksEl.classList.toggle('active');
    });
});
