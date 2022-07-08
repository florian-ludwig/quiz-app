export default function navButton() {
  const buttons = document.querySelectorAll('[data-js="nav-home"]');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("nav-button--clicked");
    });
  });
}
