document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.is-placeholder').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
});
