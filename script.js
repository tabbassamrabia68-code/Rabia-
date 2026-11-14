(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const role = document.querySelector('#role-text');
  const roles = ['Python Developer', 'Data Analytics Enthusiast', 'Mathematics Student', 'AI Automation Learner'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (role && !reduceMotion) {
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % roles.length;
      role.textContent = roles[index];
    }, 2600);
  }
})();