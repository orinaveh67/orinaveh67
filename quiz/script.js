const questions = [
    "How do you feel about trying your luck at the casino?",
    "How do you feel about the weather during your trip?",
    "Are you a party person who enjoys vibrant nightlife?",
    "How important is shopping for your travel experience?",
    "Which cuisine appeals to you the most?"
];

const options = [
    ["I love the thrill of the casino! It's a must for my trip.", "I'm open to it occasionally, but it's not a priority.", "Not interested in casinos; I prefer other forms of entertainment."],
    ["I don't mind; weather isn't a significant factor in my travel decisions.", "I love it hot! The warmer, the better.", "I prefer colder weather; it adds to the charm of the destination."],
    ["Always up for a party!", "Occasionally, for special occasions.", "Not at all, I prefer quiet evenings."],
    ["Absolutely, love shopping!", "Not much, I prefer other activities.", "No, not interested in shopping."],
    ["Traditional British dishes", "Authentic Spanish tapas", "Hungarian delights"]
];

let currentQuestion = 0;
let scores = {
    London: 0,
    Madrid: 0,
    Budapest: 0
};

function startQuiz() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    initQuiz();
}

function initQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion];
    showOptions(options[currentQuestion]);
}

function showOptions(options) {
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(index) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));

    const selectedOption = options[index].textContent;
    updateScores(selectedOption);
    showSelectedOption(index);
}

function updateScores(selectedOption) {
    switch (currentQuestion) {
        case 0:
            scores.London += (selectedOption === "I love the thrill of the casino! It's a must for my trip.") ? 1 : 0;
            scores.Madrid += (selectedOption === "I'm open to it occasionally, but it's not a priority.") ? 1 : 0;
            scores.Budapest += (selectedOption === "Not interested in casinos; I prefer other forms of entertainment.") ? 1 : 0;
            break;
        case 1:
            scores.London += (selectedOption === "I don't mind; weather isn't a significant factor in my travel decisions.") ? 1 : 0;
            scores.Madrid += (selectedOption === "I love it hot! The warmer, the better.") ? 1 : 0;
            scores.Budapest += (selectedOption === "I prefer colder weather; it adds to the charm of the destination.") ? 1 : 0;
            break;
        case 2:
            scores.London += (selectedOption === "Always up for a party!") ? 1 : 0;
            scores.Madrid += (selectedOption === "Occasionally, for special occasions.") ? 1 : 0;
            scores.Budapest += (selectedOption === "Not at all, I prefer quiet evenings.") ? 1 : 0;
            break;
        case 3:
            scores.London += (selectedOption === "Absolutely, love shopping!") ? 1 : 0;
            scores.Madrid += (selectedOption === "Not much, I prefer other activities.") ? 1 : 0;
            scores.Budapest += (selectedOption === "No, not interested in shopping.") ? 1 : 0;
            break;
        case 4:
            scores.London += (selectedOption === "Traditional British dishes") ? 1 : 0;
            scores.Madrid += (selectedOption === "Authentic Spanish tapas") ? 1 : 0;
            scores.Budapest += (selectedOption === "Hungarian delights") ? 1 : 0;
            break;
        default:
            break;
    }
}

function handleTiebreaker(selectedOption) {
    const budgetQuestion = "What is your budget for the trip?";
    const budgetOptions = ["Low", "Medium", "High"];

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = budgetQuestion;
    showOptions(budgetOptions);

    submitAnswer = function () {
        const tiebreakerAnswer = document.querySelector(".option.selected").textContent;
        processTiebreakerAnswer(tiebreakerAnswer);
    };
}

function processTiebreakerAnswer(tiebreakerAnswer) {
    showResult();
}

function showSelectedOption(index) {
    const options = document.querySelectorAll(".option");
    options[index].classList.add("selected");
}

function submitAnswer() {
    currentQuestion++;

    if (currentQuestion < 5) {
        showQuestion();
    } else {
        handleTiebreaker();
    }
}

function backQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showFinishButton() {
    const finishButton = document.querySelector(".finish-button");
    finishButton.style.display = "block";
}

function showResult() {
    const resultElement = document.getElementById("result");
    const bestCity = getBestCity();
    showResultImage(bestCity);
    showResultText(bestCity);
}

function getBestCity() {
    let bestCity = "London";

    if (scores.Budapest > scores.London && scores.Budapest > scores.Madrid) {
        bestCity = "Budapest";
    } else if (scores.Madrid > scores.London && scores.Madrid > scores.Budapest) {
        bestCity = "Madrid";
    }

    return bestCity;
}

function showResultImage(city) {
    const resultImage = document.getElementById("resultImage");
    resultImage.style.backgroundImage = `url('./${city.toLowerCase()}.jpg')`;
}

function showResultText(city) {
    const resultText = document.getElementById("resultText");
    resultText.textContent = getBestCityText(city);
}

function getBestCityText(city) {
    switch (city) {
        case "London":
            return "London is the best destination for you!";
        case "Budapest":
            return "Budapest is the best destination for you!";
        case "Madrid":
            return "Madrid is the best destination for you!";
        default:
            return "";
    }
}
