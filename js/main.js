const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(5,4,3,0.92)'
      : 'linear-gradient(to bottom, rgba(5,4,3,0.85), transparent)';
  });