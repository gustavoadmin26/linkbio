(() => {
  const cfg = window.LINKBIO_CONFIG || {};
  const media = window.LINKBIO_MEDIA || {};
  const toast = document.getElementById('toast');
  let timer;

  document.querySelectorAll('[data-image]').forEach((img) => {
    const key = img.dataset.image;
    if (media[key]) img.src = media[key];
  });

  const showToast = (message) => {
    clearTimeout(timer);
    toast.textContent = message;
    toast.classList.add('show');
    timer = setTimeout(() => toast.classList.remove('show'), 2400);
  };

  document.querySelectorAll('[data-key]').forEach((card) => {
    const key = card.dataset.key;
    const url = (cfg[key] || '').trim();

    if (url) {
      card.href = url;
      card.target = '_blank';
      card.rel = 'noreferrer';
      return;
    }

    card.setAttribute('aria-disabled', 'true');
    card.addEventListener('click', (event) => {
      event.preventDefault();
      showToast(
        key === 'MENTORIA_URL'
          ? 'O link da mentoria será publicado em breve.'
          : key === 'METODO_URL'
            ? 'O conteúdo do método será publicado em breve.'
            : 'Este link está sendo configurado.'
      );
    });
  });
})();
