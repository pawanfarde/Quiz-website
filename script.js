const quizDB =[
    {
        question: "Q1: what is the full form of HTML",
        a: "Hello to my land",
        b: "hey text markup language",
        c: "hypertext markep language",
        d: "hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q2: what is the full form of css",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Crtoon Style Sheep",
        d: "Cscading super sheets",
        ans: "ans1"
    },
    {
        question: "Q3: what is the full form of HTTP",
        a: "hypertext transfer product",
        b: "hypertext test protocal",
        c: "hey transfer protocal",
        d: "hypertext transfer protocal;",
        ans: "ans4"
    },
    {
        question: "Q4: what is the full form of JS",
        a: "javascript",
        b: "javasuper",
        c: "justscript",
        d: "jordenshoes",
        ans: "ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.lenght){
        loadQuestion();
    
    }else{

        showScore.innerHTML =`
        <h3> you scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
    `;

    showScore.classList.remove('scoreArea');
    }

});  