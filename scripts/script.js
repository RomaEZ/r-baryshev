document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
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
  const menuIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
  const closeIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const syncMobileToggleState = () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileToggle.innerHTML = isOpen ? closeIcon : menuIcon;
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  };

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('open');
    syncMobileToggleState();
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('open')) return;
    if (e.target.closest('#mobileMenu') || e.target.closest('#mobileToggle')) return;
    mobileMenu.classList.remove('open');
    syncMobileToggleState();
  });
  syncMobileToggleState();

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
  window.closeMobile = function() {
    mobileMenu.classList.remove('open');
    syncMobileToggleState();
  };
  window.scrollTo = function(id) {
    closeMobile();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
});