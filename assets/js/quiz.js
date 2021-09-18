// constants

// Linking to the posiiton on the HTML
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Questions stored as an array. Positive is it's easy to iterate over this way. 
const questions = [
    {
        question: "Who was the first AEW World Champion?",
        answers: {
            a: "Chris Jericho",
            b: "Jon Moxley",
            c: "Brandon Cutler",
            d: "Adam Page"
        },
        correctAnswer: "a"
    },
    {
        question: "Who were the first AEW Tag Team Champions?",
        answers: {
            a: "The Young Bucks",
            b: "The Lucha Brothers",
            c: "Alex Reynolds and John Silver",
            d: "SCU"
        },
        correctAnswer: "d"
    },
    {
        question: "Who was the first AEW Womens World Champion?",
        answers: {
            a: "Nyla Rose",
            b: "Riho",
            c: "Britt Baker",
            d: "Thunder Rose"
        },
        correctAnswer: "b"
    },
]

// functions

//
function createQuiz(){}

function showResults(){}

// To display straight away. 
createQuiz();


// To show results on submit
submitButton.addEventListener('click', showResults);