<<<<<<< HEAD
let like = document.querySelector('.like');
let likesNumber = document.querySelector('.likes-number');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
}; 
=======
let like = document.querySelector('.like');
let likesNumber = document.querySelector('.likes-number');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
}; 
>>>>>>> ddd8bf7ffd522bad23d69614e458f34e3663d7da
