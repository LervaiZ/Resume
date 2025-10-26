// Ensure the page starts at the very top on initial load/reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

// Update footer year
(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
