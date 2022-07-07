export default function homeButton() {
  const home = document.querySelector('[data-js="nav-home"]');

  function homeClick() {
    home.classList.remove("nav-home");
  }

  bookmark.addEventListener("click", homeClick);
}
