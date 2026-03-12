document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = ['hero','achievements','responsibilities','experience','education','skills','about'];

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    let current = 'hero';
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) { current = sections[i]; break; }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }, { passive: true });

  // Mobile menu
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));

  // Scroll animations (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Certificate modal
  const certModal = document.getElementById('certModal');
  window.openCertModal = function(name, imgSrc) {
    document.getElementById('certModalTitle').textContent = name;
    const img = document.getElementById('certModalImg');
    img.src = imgSrc;
    img.alt = name;
    certModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeCertModal = function() {
    certModal.classList.remove('open');
    document.body.style.overflow = '';
  };
  certModal.addEventListener('click', function(e) {
    if (e.target === certModal) closeCertModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeCertModal();
  });

  // Expose to inline handlers
  window.closeMobile = function() { mobileMenu.classList.remove('open'); };
  window.scrollTo = function(id) {
    closeMobile();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
});