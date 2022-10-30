const start_btn = document.getElementById('startBtn');
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');
const timeCount = quiz_box.querySelector('.timer .timer_sec')

const option_list = document.querySelector('.option_list');


// if Start Button Clicked
start_btn.addEventListener('click', () => info_box.classList.remove('hide'));


// if Continue Button Clicked
continue_btn.addEventListener('click', () => {
    quiz_box.classList.remove('hide');
    showQuestions(que_count);
    queCounter(que_num);
});


// if Exit Button Clicked



// Qoestions
let questions = [
    {
        num: 1,
        question: 'What does "Mardi Gras" mean?',
        answer: 'Fat tuesday',
        options: [
            'Shrove monday',
            'Ash wednesday',
            'Good friday',
            'Fat tuesday'
        ]
    },
    {
        num: 2,
        question: 'What is the Mardi Gras slogan?',
        answer: 'Laissez les bon temps rouler',
        options: [
            'Laissez les bon temps rouler',
            'Vivre vite, mourir jeune',
            'Voulez-vous coucher avec moi',
            'Que la fete commence'
        ]
    },
    {
        num: 3,
        question: 'Mardi Gras is part of what larger festival?',
        answer: 'Carnival',
        options: [
            'Jubilee',
            'Carnival',
            'Saturnalia',
            'Samhain'
        ]
    },
    {
        num: 4,
        question: 'Who started the bead-throwing tradition?',
        answer: 'Santa Claus',
        options: [
            'Gypsy rose lee',
            'Theodore Roosevelt',
            'Santa Claus',
            'Dionysus'
        ]
    },
    {
        num: 5,
        question: 'What is the oldest known krewe?',
        answer: 'Krewe of Comus',
        options: [
            'Krewe of Orpheus',
            'Krewe of Comus',
            'Krewe of Bacchus',
            'Krewe of Cleopatra'
        ]
    },
    {
        num: 6,
        question: 'What are the official colors of Mardi Gras?',
        answer: 'Purple, Green, and Gold',
        options: [
            'Black, Green, and Gold',
            'Purple, Black, and Gold',
            'Purple, Green, and Black',
            'Purple, Green, and Gold'
        ]
    },
    {
        num: 7,
        question: 'What day does Carnival season begin in New Orleans?',
        answer: 'Twelfth Night',
        options: [
            'Twelfth Night',
            'Tenth Night',
            'Eighth Night',
            'Sixth Night'
        ]
    },
    {
        num: 8,
        question: 'What groups organize the Mardi Gras parades?',
        answer: 'Krewes',
        options: [
            'Choros',
            'Revelries',
            'Faxions',
            'Krewes'
        ]
    },
    {
        num: 9,
        question: 'Where was the first organized Mardi Gras celebration in the United States?',
        answer: 'Mobile, Alabama',
        options: [
            'ST. Louis, Missouri',
            'New Orleans, Louisiana',
            'Mobile, Alabama',
            'Galveston, Texas'
        ]
    },
    {
        num: 10,
        question: 'What does the Krewe of Zulu throw instead of beads?',
        answer: 'Coconuts',
        options: [
            'Coconuts',
            'Spears',
            'Flowers',
            'Shrunken heads'
        ]
    },
]

const next_btn = document.querySelector('.next_btn');


let que_count = 0;
let que_num = 1;
let counter;


// getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector('.que_text');
    que_text.innerHTML = `<span>${questions[index].num}. ${questions[index].question}</span>`;

    option_list.innerHTML = `
                            <div class="option color">${questions[index].options[0]}<span></span></div>
                            <div class="option color">${questions[index].options[1]}<span></span></div>
                            <div class="option color">${questions[index].options[2]}<span></span></div>
                            <div class="option color">${questions[index].options[3]}<span></span></div>
                            `;
    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
    que_count ++;
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count -1].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.remove('color')
        answer.classList.add('correct')
    } else {
        answer.classList.remove('color')
        answer.classList.add('dis_correct')

        // if answer is wrong then automaticly selected the coorect answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].classList.remove('color')
                option_list.children[i].classList.add('correct');
            }
            
        }
    }

    // Once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled');
        
    }
}

// if Next Button Clicked
next_btn.addEventListener('click', () => {
    if (que_count < questions.length) {
    showQuestions(que_count);
    } else {
        alert('finish');
    }
    queCounter(que_num);
});


function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector('.total_que')
    bottom_ques_counter.innerHTML = `<span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`
    que_num ++;
}

function startTimer(){
    counter = setInterval(timer, 1000);
}