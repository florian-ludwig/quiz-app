export default function createCard() {
  let questionCards = [
    {
      question: "Lorem Ipsum Bla Bla Bla",
      answer: "Käsekuchen",
      tags: ["Antwort 1", "Antwort 2", "Antwort 3", "Antwort 4"],
    },
    {
      question: "Lorem Ipsum Bla Bla Bla",
      answer: "Magerquark",
      tags: ["Antwort 1", "Antwort 2", "Antwort 3", "Antwort 4"],
    },
    {
      question: "Lorem Ipsum Bla Bla Bla",
      answer: "Currywurst",
      tags: ["Antwort 1", "Antwort 2", "Antwort 3", "Antwort 4"],
    },
  ];

  const main = document.querySelector('[data-js="main"]');

  questionCards.forEach((card) => {
    const element = document.createElement("div");
    element.classList.add("quiz--card");
    main.append(element);

    const bookmark = document.createElement("button");
    bookmark.classList.add("bookmark");
    element.append(bookmark);

    const bookmarkIcon = document.createElement("img");
    bookmarkIcon.classList.add("quiz-card-bookmark");
    bookmarkIcon.src = "./icon/bookmark.svg";
    element.append(bookmarkIcon);
    bookmarkIcon.setAttribute("data-js", "bookmark-button");

    const headline = document.createElement("span");
    headline.innerText = "Question:";
    headline.classList.add("headline");
    element.append(headline);

    const questionText = document.createElement("p");
    questionText.innerText = card.question;
    questionText.classList.add("question-text");
    element.append(questionText);

    const answerButton = document.createElement("button");
    answerButton.classList.add("quiz--show--answer--btn");
    element.append(answerButton);
    answerButton.setAttribute("data-js", "answer-button");

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");
    element.append(answerContainer);

    const answerText = document.createElement("p");
    answerText.classList.add("answer-text");
    answerText.innerHTML = card.answer;
    element.append(answerText);
    answerContainer.setAttribute("data-js", "show-text");

    const quizButton1 = document.createElement("button");
    quizButton1.classList.add("quiz--btn--1");
    quizButton1.innerText = card.tags[0];
    element.append(quizButton1);

    const quizButton2 = document.createElement("button");
    quizButton2.classList.add("quiz--btn--2");
    quizButton2.innerText = card.tags[1];
    element.append(quizButton2);

    const quizButton3 = document.createElement("button");
    quizButton3.classList.add("quiz--btn--3");
    quizButton3.innerText = card.tags[2];
    element.append(quizButton3);

    const quizButton4 = document.createElement("button");
    quizButton4.classList.add("quiz--btn--4");
    quizButton4.innerText = card.tags[3];
    element.append(quizButton4);
  });
}
