document.addEventListener("DOMContentLoaded", () => {
  // Variables to track game state
  let currentPage = "start";
  let score = 0;
  let life = 3;
  let currentQuestion = 1;
  let questions = [];
  let timer;
  let timeLeft;

  // DOM Elements
  const pages = document.querySelectorAll(".page");
  const startButton = document.querySelector(".start-button");
  const yesButton = document.querySelector(".yes-btn");
  const noButton = document.querySelector(".no-btn");
  const hearts = document.querySelectorAll(".heart-icon");
  const playAgainButton = document.querySelector(".play-again");
  const timerElement = document.querySelector(".timer");
  const questionElement = document.querySelector(".question");
  const scoreCount = document.querySelector(".score-count");
  const lifeCount = document.querySelector(".life-count");
  const finalScoreCount = document.querySelector(".final-score-count");

  // Function to show a specific page
  function showPage(pageName) {
    pages.forEach((page) => page.classList.remove("active"));
    document.querySelector(`.${pageName}-page`).classList.add("active");
    currentPage = pageName;
  }

  // Function to fetch questions from API
  async function fetchQuestions() {
    try {
      // Check if question element exists
      if (!questionElement) {
        console.error("Question element not found in the DOM");
        return;
      }

      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=27&type=boolean"
      );
      const data = await response.json();

      console.log("Fetched data:", data); // Debug log

      if (data.response_code === 0 && data.results) {
        questions = data.results;
        displayQuestion();
      } else {
        questionElement.textContent =
          "Error loading questions. Please try again.";
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      if (questionElement) {
        questionElement.textContent =
          "Error loading questions. Please try again.";
      }
    }
  }

  // Function to display current question
  function displayQuestion() {
    if (questions.length > 0) {
      const question = questions[0];
      const tempElement = document.createElement("div");
      tempElement.innerHTML = question.question;
      const decodedQuestion = tempElement.textContent;

      // Display the decoded question
      questionElement.textContent = decodedQuestion;
      startTimer();
    }
  }

  // Timer function
  function startTimer() {
    timeLeft = 10;
    timerElement.textContent = timeLeft;

    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        handleTimeout();
      }
    }, 1000);
  }

  // Function to update heart icon
  function updateHearts(remainingLives) {
    hearts.forEach((heart, index) => {
      if (index < remainingLives) {
        // heart.style.display = "inline-block"; // Show heart
        heart.style.opacity = "1";
      } else {
        heart.style.opacity = "0.2";
      }
    });
  }

  // Handle timeout
  function handleTimeout() {
    clearInterval(timer);
    life--;
    updateHearts(life);

    if (life <= 0) {
      endGame();
    } else {
      nextQuestion();
    }
  }

  // Handle answer
  function handleAnswer(answer) {
    clearInterval(timer);
    const correctAnswer =
      questions[0].correct_answer.toLowerCase() === "true" ? "yes" : "no";

    if (answer === correctAnswer) {
      score += 10;
      scoreCount.textContent = score;
    } else {
      life--;
      updateHearts(life);

      if (life <= 0) {
        endGame();
        return;
      }
    }

    nextQuestion();
  }

  // Next question
  function nextQuestion() {
    questions.shift();
    currentQuestion++;

    document.querySelector(".current-question").textContent = currentQuestion;

    if (questions.length === 0) {
      endGame();
    } else {
      displayQuestion();
    }
  }

  // End game
  function endGame() {
    clearInterval(timer);
    finalScoreCount.textContent = score;
    showPage("score");
  }

  // Event Listeners
  startButton.addEventListener("click", () => {
    showPage("quiz");
    fetchQuestions();
  });

  yesButton.addEventListener("click", () => handleAnswer("yes"));
  noButton.addEventListener("click", () => handleAnswer("no"));

  playAgainButton.addEventListener("click", () => {
    score = 0;
    life = 3;
    currentQuestion = 1;
    scoreCount.textContent = score;
    lifeCount.textContent = life;
    showPage("start");
  });
});
