const questionsAsked = document.querySelector("#questions");
const timeCounter = document.querySelector("#counter");
const choicesPicked = document.querySelector("#options");
const submitButton = document.querySelector("#submit-score");
const startButton = document.querySelector("#start-button");


const questioning = [
    {
        prompt: "Commonly used data types DO Not Include?",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },

    {
        prompt: "The condition in an if / else statement is enclosed with ______.",
        options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Curly Brackets"
    },

    {
        prompt: "Arrays in JavaScript can be used to store ______.",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },

    {
        prompt: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },

    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        answer: "Console.log"
    },]