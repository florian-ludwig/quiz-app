export default function Bookmark() {
  const bookmark = document.querySelector('[data-js="bookmark-button"]');
  const bookmarkIcon = document.querySelector('[data-js="bookmark-checked"]');

  function bookmarkClick() {
    bookmarkIcon.classList.toggle("quiz-card-bookmark--checked");
  }

  bookmark.addEventListener("click", bookmarkClick);
}
