document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      document.querySelectorAll('.blob').forEach((b, i) => {
        b.style.transform = `translateY(${y * (i ? -0.04 : 0.05)}px)`;
      });
    }, { passive: true });
  }
});
