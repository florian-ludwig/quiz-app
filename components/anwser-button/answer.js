export default function Answer() {
  const button = document.querySelector('[data-js="answer-button"]');
  const answer = document.querySelector('[data-js="show-text"]');

  let answerText = false;

  function buttonClick() {
    answer.classList.toggle("answer-text");
    answerText = !answerText;
    button.innerText = answerText ? "Hide Answer" : "Show Answer";
  }

  button.addEventListener("click", buttonClick);
}
