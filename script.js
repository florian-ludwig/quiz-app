let button = document.querySelector(
  '[data-js="quiz--show--answer--btn__clicked"]'
);

function buttonClicked() {
  console.log("Button clicked");
}

button.addEventListener("click", buttonClicked);
