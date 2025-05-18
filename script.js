// -------------------------------
// Rolagem suave ao clicar no menu
// -------------------------------
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove o "#"
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

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Rolando para baixo: esconde a navbar
      navbar.classList.add('hide');
    } else {
      // Rolando para cima: mostra a navbar
      navbar.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // evita valores negativos
  });

   const botao = document.getElementById('toggle-btn');
  const breve = document.getElementById('texto-breve');
  const completo = document.getElementById('texto-completo');

  botao.addEventListener('click', () => {
    const mostrandoBreve = breve.style.display !== 'none';

    if (mostrandoBreve) {
      breve.style.display = 'none';
      completo.style.display = 'block';
      botao.textContent = '-';
    } else {
      completo.style.display = 'none';
      breve.style.display = 'block';
      botao.textContent = 'Mais sobre mim';
    }
  });
