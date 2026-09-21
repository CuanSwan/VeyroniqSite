document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.vq-form-1');
  if (!form) return;

  const confirmation = document.getElementById('form-confirmation');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (confirmation) {
      confirmation.hidden = false;
    }
  });
});
