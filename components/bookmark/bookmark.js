export default function Bookmark() {
  const bookmark = document.querySelector('[data-js="bookmark-checked"]');

  function bookmarkClick() {
    bookmark.classList.toggle("quiz-card-bookmark--checked");
  }

  bookmark.addEventListener("click", bookmarkClick);
}
