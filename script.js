document.addEventListener('DOMContentLoaded', function () {
  const getStarted = document.querySelector('#get-started, .get-started, [data-role="get-started"]');
  if (!getStarted) {
    return;
  }

  getStarted.addEventListener('click', function (event) {
    event.preventDefault();

    const targetSelector = getStarted.dataset.target || getStarted.getAttribute('href') || '#contact';
    const target = document.querySelector(targetSelector);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (targetSelector && targetSelector.startsWith('http')) {
      window.location.href = targetSelector;
    }
  });
});
