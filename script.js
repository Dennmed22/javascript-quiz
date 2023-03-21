const questionsAsked = document.querySelector("#questions");
const timeCounter = document.querySelector("#counter");
const choicesPicked = document.querySelector("#options");
const submitButton = document.querySelector("#submit-score");
const startButton = document.querySelector("#start-button");
const userName = document.querySelector("#name");
const feedbackWr = document.querySelector("#feedback");
const indexCurrentQuestion = 0;
const time = questions.length * 15;
let timerId;

const questioning = [
    {
        prompt: "Commonly used data types DO Not Include?",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },]

    console.log(questioning);

   /* {
        prompt: "Commonly used data types DO Not Include?",
        options: ["<Strings>", "<Booleans>", "<Alerts>", "<Numbers>"],
        answer: "<Alerts>"
    }*/