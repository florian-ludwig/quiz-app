// SHOW ANSWER

let button = document.querySelector('[data-js="answer-button"]');
let answer = document.querySelector('[data-js="show-text"]');

function buttonClick() {
  answer.classList.toggle("answer-text");
}

button.addEventListener("click", buttonClick);

// BOOKMARK

let bookmark = document.querySelector('[data-js="bookmark-checked"]');

function bookmarkClick() {
  bookmark.classList.toggle("quiz-card-bookmark--checked");
}

bookmark.addEventListener("click", bookmarkClick);
