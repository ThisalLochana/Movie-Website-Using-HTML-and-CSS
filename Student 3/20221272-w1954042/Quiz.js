let questions = [
    {
        numb: 1,
        question: "Which country were The Lord of the Rings movies filmed in?",
        answer: "New Zealand",
        options: ["New Zealand","Iceland","Croatia","Australia"]
    },
    {
        numb: 2,
        question: "Who sang “My Heart Will Go On” in Titanic?",
        answer: "Celine Dion",
        options: ["Mariah Carey","Whitney Houston","Celine Dion","Adele"]
    },
    {
        numb: 3,
        question: "Which of the following is officially the highest grossing movie of all time?",
        answer: "Avatar",
        options: ["Avatar","Avengers: Endgame","Titanic","Star Wars Ep. VII: The Force Awakens"]
    },
    {
        numb: 4,
        question: "In Back to the Future II, Marty, Doc, and Jennifer travel through time to which year in the future?'",
        answer: "2015",
        options: ["2005","2010","2015","2020"]
    },
    {
        numb: 5,
        question: "Which of the following actors has NOT played DC\'s Joker?",
        answer: "Sean Penn",
        options: ["Jared Leto","Joaquin Phoenix","Sean Penn","Mark Hamill"]
    },
    {
        numb: 6,
        question: "When was “Fight Club” released?",
        answer: "1999",
        options: ["1989","1999","2009","2019"]
    },
    {
         numb: 7,
         question: "Which author wrote the novel Lord of Rings?",
         answer: "J. R. R. Tolkien",
         options: ["J.K. Rowling","C.S. Lewis","H. P. Lovecraft","J. R. R. Tolkien"]
    },
    {
         numb: 8,
         question: "Which 2016 movie starred Ryan Gosling and Emma Stone?",
         answer: "La La Land",
         options: ["A Star is Born","La La Land","Dirty Dancing","Moonlight"]
    },
    {
         numb: 9,
         question: "Which Australian actor is known for playing Thor?",
         answer: "Chris Hemsworth",
         options: ["Chris Hemsworth","Chris Evans","Robert Downey Jr","Christian Bale"]
    },
    {
         numb: 10,
         question: "What is the name of the character played by Johnny Depp in “Pirates of the Caribbean”?",
         answer: "Captain Jack Sparrow",
         options: ["Captain Hook","Captain Jack Sparrow","Captain Teague","Elizabeth Swann"]
    }

];
//Variables
let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let WrongAnswer =0;
let counter;
let counterLine;
let widthValue = 0;
let printTime = -1;

/* Selecting Required Elements */
const start_btn = document.querySelector(".start_btn button");
const introduction_box = document.querySelector(".introduction_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const CorrectAns = document.querySelector(".Correct_answers");
const wrongAns = document.querySelector(".wrong_answers");
const rank = document.querySelector(".rank");
const rankText = document.querySelector(".ranktext")
const Avg = document.querySelector(".avg")
const yourTime = document.querySelector(".yourTime");
const que = document.querySelector(".question")
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const next_btn = document.querySelector(".footer_1 .next_btn");
const bottom_ques_counter = document.querySelector(".footer_1 .total_que");

//StartQuiz Button Clicked
start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //Show Quiz Box
    showQuestions(0); //Calling ShowQuestions Function
    queCounter(1); //Passing 1 Parameter To QueCounter
    startTimer(60); //Calling StartTimer Function
    startTimerLine(0); //Calling StartTimerLine Function
}


//RestartQuiz Button Clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //Show Quiz Box
    result_box.classList.remove("activeResult"); //Hide Result Box
    timeValue = 60;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    WrongAnswer = 0;
    widthValue = 0;
    printTime = -1;
    showQuestions(que_count); //Calling ShowQuestions Function
    queCounter(que_numb); //Passing que_numb Value To queCounter
    clearInterval(counter); //Clear Counter
    clearInterval(counterLine); //Clear counterLine
    startTimer(timeValue); //Calling startTimer Function
    startTimerLine(widthValue) //Calling startTimerLine Function 
    timeText.textContent = ("Time Left");
    next_btn.classList.remove("show"); //Hide The Next Button
}

//If QuitQuiz Button Clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //Reload The Current Window
}

//If Next Que Button Clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1) {
        que_count++; //Increament the que_coun value
        que_numb++; //Increament the que_numb value
        showQuestions(que_count); //Calling showQuestions Function
        queCounter(que_numb); //Passing que_numb value to queCounter
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show"); //Hide The Next Button
    }else{
        clearInterval(counter); //Clear counter
        clearInterval(counterLine); //Clear counterLine
        showResult(); //Calling showResult Function
    }
}

//Getting Questions And Options From Array
function showQuestions(index){
const que_text = document.querySelector(".que_text")

//Creating a new span and div tag for question and option  and passing the value using array index
let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
let option_tag = '<div class="option"><span>' + questions[index].options[0] +'</span></div>' +'<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
+'<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
+'<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
que_text.innerHTML = que_tag; //Adding new span tag inside que_tag
option_list.innerHTML = option_tag //Adding new div tag inside option_tag

const option = option_list.querySelectorAll(".option");

//Set onclick attributeto all available options
for(i=0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
}
}

//Creating The New Div For Icons
let tickIconTag  = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag  = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//If User Clicked On Options
function optionSelected(answer){
    let userAns = answer.textContent; //Getting user selected option
    let correcAns = questions[que_count].answer; //Getting correct answer from array
    const allOptions = option_list.children.length; // Getting all options items

    //If user selected option is equal to array's correct answer
    if(userAns == correcAns){
        userScore += 1; //Upgrading score value width 1
        answer.classList.add("correct"); //Adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        WrongAnswer+= 1;
        answer.classList.add("incorrect"); //Adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //Adding cross icon to the correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){
                option_list.children[i].setAttribute("class", "option correct"); //Adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //Adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //Once user select an option then disable all options
    }
    next_btn.classList.add("show"); //Show the next button if user selected any option
}

function showResult(){
    quiz_box.classList.remove("activeQuiz"); //Hide quiz box
    result_box.classList.add("activeResult"); //Show result box
    que.innerHTML = "Question :"+questions.length;
    CorrectAns.innerHTML ="Correct answers :" + userScore; //Show Correct answers
    wrongAns.innerHTML ="Wrong answers :" + WrongAnswer;
    yourTime.innerHTML = "Your took " +printTime+ " Seconds";
    let Avg = (userScore*100)/questions.length;
    document.querySelector(".Avg-text").textContent = "Average Score: " + Avg+"/100";
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 8){ //If user score more than 3
        rankText.innerHTML = "Excellent, Keep the good work going."
        let scoreTag = "<p>You got "+ userScore +" out of "+ questions.length +"😍💪</p>";//Adding new tag inside score_text
        result_box.style.backgroundColor = "#41fd6a";
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore >= 4){ //If user score more than 1
        rankText.innerHTML = "Average Grades, You can do better."
        let scoreTag = "<P>You got "+ userScore +" out of "+ questions.length +"😊👍</p>";
        scoreText.innerHTML = scoreTag;
        result_box.style.backgroundColor = "rgb(243, 208, 131)";
    }
    else{ //if user score less than 1
        rankText.innerHTML = "Bad Grades, Keep Practicing"
        let scoreTag = "<P>You got "+ userScore +" out of "+ questions.length+"😔💔</P>";
        scoreText.innerHTML  = scoreTag;
        result_box.style.backgroundColor = "#ff9797";
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //Changing the value of timeCount with time value
        time--; //Decreament the time value
        printTime++;
        if(time == 8){
            alert('Hurry Up You have only 10 seconds!'); 
        }
        if(time < 9){ //If time is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; // Add a 0 before time value
            
        }
        if(time < 0){ //If time is less than 0
            timeText.timeContent = "Time Off";
            showResult();
            clearInterval(counter);//Clear interval
            clearInterval(counterLine);
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 109);
    function timer(){
        time += 1; //Upgrading time value width 1
        time_line.style.width = time + "px"; //Increasing width of time_line with px by time value
        if(time > 549){ //If time value is greater than 549
            clearInterval(counterLine); //Clear interval
        }
    }
}
function queCounter(index){
    //Creating a new span tag and passing the question number and total 
    let totalQueCounTag = '<span><p>'+ index + '</p> of <p>'+ questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; //Adding new span tag inside bottom_ques_counter
}


