export default function Answer() {
  const button = document.querySelector('[data-js="answer-button"]');
  const answer = document.querySelector('[data-js="show-text"]');

  function buttonClick() {
    answer.classList.toggle("answer-text");
  }

  button.addEventListener("click", buttonClick);
}
