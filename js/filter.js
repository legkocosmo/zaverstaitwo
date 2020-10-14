<<<<<<< HEAD
let articles = document.querySelectorAll('.card');
let filter = document.querySelector('.filter');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
=======
let articles = document.querySelectorAll('.card');
let filter = document.querySelector('.filter');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
>>>>>>> ddd8bf7ffd522bad23d69614e458f34e3663d7da
};