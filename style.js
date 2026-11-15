const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️ Light Mode';
    } else {
      themeToggle.textContent = '🌙 Dark Mode';
    }
  });
}

const currentYear = document.getElementById('year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting me!');
    contactForm.reset();
  });
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function (card) {
  card.classList.add('project-ready');
});

// PANG-PIGIL KAY LOPPY
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var id = link.getAttribute('href').replace('#', '');
    var target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, true);
});
