document.addEventListener("DOMContentLoaded", function () {
  const bookmarkButtons = document.querySelectorAll(".card__bookmark");
  const answerButtons = document.querySelectorAll(".card__answer-button");

  // Bookmark-Button
  bookmarkButtons.forEach(function (bookmarkButton) {
    bookmarkButton.addEventListener("click", function () {
      if (bookmarkButton.classList.contains("card__bookmark--active")) {
        bookmarkButton.classList.remove("card__bookmark--active");
        bookmarkButton.classList.add("card__bookmark--inactive");
        bookmarkButton.querySelector("img").src =
          "/resources/bookmark-check_inactive.svg";
      } else {
        bookmarkButton.classList.remove("card__bookmark--inactive");
        bookmarkButton.classList.add("card__bookmark--active");
        bookmarkButton.querySelector("img").src =
          "/resources/bookmark-check_active.svg";
      }
    });
  });

  // Answer-Button
  answerButtons.forEach(function (answerButton) {
    const answer = answerButton.nextElementSibling;

    answerButton.addEventListener("click", function () {
      answer.classList.toggle("hidden");

      // Text
      if (answer.classList.contains("hidden")) {
        answerButton.textContent = "SHOW ANSWER";
      } else {
        answerButton.textContent = "HIDE ANSWER";
      }

      // Active Button
      answerButton.classList.toggle("active");
    });
  });
});
