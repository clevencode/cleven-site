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
// Tabs: mostra o conteúdo correspondente
// -------------------------------
const tabs = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Scroll automático para facilitar a visualização do botão ao iniciar o site
window.addEventListener("load", () => {
  toggleBtn.scrollIntoView({ behavior: "smooth", block: "center" });
});


 

  