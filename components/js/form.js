document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("card-form");

  // Update character counter
  function updateCharCounter(textarea, counterId) {
    const maxLength = textarea.maxLength;
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;
    const counter = document.getElementById(counterId);
    counter.textContent = `${remaining} characters remaining`;
  }

  // Event listeners to update counters
  const questionTextarea = document.getElementById("question");
  const answerTextarea = document.getElementById("answer");

  questionTextarea.addEventListener("input", () => {
    updateCharCounter(questionTextarea, "question-counter");
  });

  answerTextarea.addEventListener("input", () => {
    updateCharCounter(answerTextarea, "answer-counter");
  });

  // Update
  updateCharCounter(questionTextarea, "question-counter");
  updateCharCounter(answerTextarea, "answer-counter");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = questionTextarea.value;
    const answer = answerTextarea.value;
    const tag = document.getElementById("tag").value;

    // Create card elements
    const card = document.createElement("section");
    card.classList.add("card");

    const cardQuestion = document.createElement("h3");
    cardQuestion.classList.add("card__question");
    cardQuestion.textContent = question;

    const cardAnswerButton = document.createElement("button");
    cardAnswerButton.classList.add("card__answer-button");
    cardAnswerButton.textContent = "SHOW ANSWER";
    cardAnswerButton.setAttribute("id", "new-answer-button");

    const cardAnswer = document.createElement("p");
    cardAnswer.classList.add("card__answer", "hidden");
    cardAnswer.textContent = answer;

    const cardBookmark = document.createElement("button");
    cardBookmark.classList.add("card__bookmark--inactive");
    cardBookmark.setAttribute("id", "new-bookmark-button");
    cardBookmark.innerHTML =
      '<img src="/resources/bookmark-check_inactive.svg" alt="bookmark-button" class="icon" />';

    const cardTags = document.createElement("ul");
    cardTags.classList.add("card__tags");
    const tagItem = document.createElement("li");
    tagItem.classList.add("tag");
    tagItem.textContent = `#${tag}`;
    cardTags.append(tagItem);

    // Append elements
    card.append(cardQuestion);
    card.append(cardAnswerButton);
    card.append(cardAnswer);
    card.append(cardBookmark);
    card.append(cardTags);

    // Create question-cards if not exists
    let questionCardsContainer = document.querySelector(".question-cards");
    if (!questionCardsContainer) {
      questionCardsContainer = document.createElement("section");
      questionCardsContainer.classList.add("question-cards");
      document.querySelector("main").append(questionCardsContainer);
    }

    // Append card to the question-cards
    questionCardsContainer.append(card);

    // Clear form fields
    form.reset();

    // Reset counters
    updateCharCounter(questionTextarea, "question-counter");
    updateCharCounter(answerTextarea, "answer-counter");

    // Event listeners to new elements
    addEventListenersToNewElements();
  });

  function addEventListenersToNewElements() {
    // New answer button click
    const newAnswerButton = document.getElementById("new-answer-button");
    if (newAnswerButton) {
      newAnswerButton.addEventListener("click", function () {
        const answer = newAnswerButton.nextElementSibling;
        answer.classList.toggle("hidden");
        if (answer.classList.contains("hidden")) {
          newAnswerButton.textContent = "SHOW ANSWER";
        } else {
          newAnswerButton.textContent = "HIDE ANSWER";
        }
        newAnswerButton.classList.toggle("active");
      });
    }

    // New bookmark button click
    const newBookmarkButton = document.getElementById("new-bookmark-button");
    if (newBookmarkButton) {
      newBookmarkButton.addEventListener("click", function () {
        if (newBookmarkButton.classList.contains("card__bookmark--active")) {
          newBookmarkButton.classList.remove("card__bookmark--active");
          newBookmarkButton.classList.add("card__bookmark--inactive");
          newBookmarkButton.querySelector("img").src =
            "/resources/bookmark-check_inactive.svg";
        } else {
          newBookmarkButton.classList.remove("card__bookmark--inactive");
          newBookmarkButton.classList.add("card__bookmark--active");
          newBookmarkButton.querySelector("img").src =
            "/resources/bookmark-check_active.svg";
        }
      });
    }
  }
});
