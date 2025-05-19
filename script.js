// -------------------------------
// Rolagem suave ao clicar no menu
// -------------------------------
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// -------------------------------
// Navbar: esconde ou mostra a navbar
// -------------------------------
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Rolando para baixo: esconde a navbar
      navbar.classList.add('hide');
    } else {
      // Rolando para cima: mostra a navbar
      navbar.classList.remove('hide');
    }

    lastScrollTop = Math.max(0, currentScroll);
  });
}



