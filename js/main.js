(function () {
  'use strict';

  // Fade-in on scroll
  var items = document.querySelectorAll('.fade');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  // Mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    burger.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
  }
  burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // Contact form -> WhatsApp
  var form = document.getElementById('contact-form');
  var error = document.getElementById('form-error');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nom = form.nom.value.trim();
    var service = form.service.value;
    var message = form.message.value.trim();
    if (!nom || !service) {
      error.hidden = false;
      return;
    }
    error.hidden = true;
    var text = 'Bonjour Morija Hub Cleaning,\n' +
      'Je m\'appelle ' + nom + '.\n' +
      'Service souhaité : ' + service + '.' +
      (message ? '\n' + message : '');
    window.open('https://wa.me/243981899064?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
