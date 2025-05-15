// Smooth Scroll
    document.querySelectorAll('.nav-link, .side-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        document.getElementById("sideMenu").style.width = "0";
      });
    });

    // Toggle Menu Mobile
    function toggleMenu() {
      const menu = document.getElementById("sideMenu");
      menu.style.width = menu.style.width === "250px" ? "0" : "250px";
    }

    // Realce de link ativo ao rolar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY + 200;
      sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === section.id) {
              link.classList.add("active");
            }
          });
        }
      });
    });