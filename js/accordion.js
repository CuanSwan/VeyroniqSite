document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vq-accordion-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.vq-accordion-item');
      const isOpen = item.getAttribute('data-open') === 'true';
      item.setAttribute('data-open', String(!isOpen));
      button.setAttribute('aria-expanded', String(!isOpen));
    });
  });
});
