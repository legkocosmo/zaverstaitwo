<<<<<<< HEAD
let commentForm = document.querySelector('.comment-form');
let submitBtn = document.querySelector('.submit__btn');
let commentList = document.querySelector('.comment-list');
let inputText = document.querySelector('.input-text');
let textarea = document.querySelector('.texterea__input');

textarea.oninput = function () {

  if (textarea.value.length < 10 || textarea.value.length > 200) {
    textarea.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    textarea.classList.remove('warning');
    submitBtn.disabled = false;
  }

}

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user__item');
  newComment.textContent = textarea.value;
  commentList.append(newComment);

  textarea.value = '';
  inputText.value = '';

};

=======
let commentForm = document.querySelector('.comment-form');
let submitBtn = document.querySelector('.submit__btn');
let commentList = document.querySelector('.comment-list');
let inputText = document.querySelector('.input-text');
let textarea = document.querySelector('.texterea__input');

textarea.oninput = function () {

  if (textarea.value.length < 10 || textarea.value.length > 200) {
    textarea.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    textarea.classList.remove('warning');
    submitBtn.disabled = false;
  }

}

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user__item');
  newComment.textContent = textarea.value;
  commentList.append(newComment);

  textarea.value = '';
  inputText.value = '';

};


>>>>>>> ddd8bf7ffd522bad23d69614e458f34e3663d7da
