const questions = [
        {
            text: "Непринятые двором символы для названия банды:",
            answers: [
            "69",
            "сосни хуйца",
            "гуляй васе",
            "чушпанчик"
        ],
        correct_answer: 0,
        valor: -1
    },
    {
        text: "Человек которого все ненавидят",
        answers: [
        "Илон маск",
        "пес",
        "_С",
        "НЕТУ"
    ],
    correct_answer: 2,
    valor: -1
    },
    {
        text: "столица гипербореи",
        answers: [
        "ковдор",
        "новиград",
        "якутск",
        "атланты"
    ],
    correct_answer: 0,
    valor: -4
    },
    {
        text: "сколько мусора выбросили люди в космос",
        answers: [
        "достаточно",
        "много",
        "очень много!!",
        "16 кг"
    ],
    correct_answer: 3,
    valor: -2
    }
]

var currentQuestion = 0;

function selectAnswer(event, correct_answer){
    const target = event.target;

    if (correct_answer == target.getAttribute('data-answer-index'))
        target.classList.add('correct')
    else
        target.classList.add('wrong')
}

function newQuestion(){
    const questionsContainer = document.getElementById("question_container")
    const answersContainer = document.getElementById("answers_container")

    questionsContainer.innerHTML = '';
    answersContainer.innerHTML = '';

    const question = questions[currentQuestion]

    const questionDiv = document.createElement('div')
    questionDiv.innerText = question.text
    questionsContainer.append(questionDiv)

    for (let i = 0; i < 4; i++){
        const answer = question.answers[i]
        const newAnswer = document.createElement('div')
        newAnswer.classList.add('answer')
        newAnswer.setAttribute('data-answer-index', i)
        newAnswer.innerText = answer
        newAnswer.setAttribute('onclick', `selectAnswer(event, ${question.correct_answer})`)
        answersContainer.append(newAnswer)
    }
}

function skip(){
    currentQuestion += 1
    newQuestion()
}

newQuestion()