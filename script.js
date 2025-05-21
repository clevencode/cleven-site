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
// -------------------------------
// Tabs: mostra o conteúdo correspondente
// -------------------------------
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

const toggleBtn = document.getElementById("toggleTabsBtn");
  const toggleIcon = document.getElementById("toggleIcon");
  const tabsContainer = document.querySelector(".tabs-container");

  // Começa escondido
  tabsContainer.style.display = "none";

  toggleBtn.addEventListener("click", () => {
    const isVisible = tabsContainer.style.display === "block";
    
    tabsContainer.style.display = isVisible ? "none" : "block";
    toggleIcon.textContent = isVisible ? "＋" : "－";
  });