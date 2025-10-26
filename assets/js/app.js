/* Small app utilities: ensure consistent scroll behavior and update UI on load */
(function () {
  'use strict';

  // Prevent browser restoring scroll position on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Run on load: scroll to top and set footer year
  window.addEventListener('load', function () {
    window.scrollTo(0, 0);
    var y = document.getElementById('y');
    if (y) {
      y.textContent = new Date().getFullYear();
    }
  });
})();
