var timer = 60;
var intervalId;
var numberQuestion= 0;
//create array of questions with answers and correct answer to be able to select from later
var myQuestions = [{
        question: "What is the name of the holiday that Frank Costanza invented?",
        answers: ["Festivus", "Christmas", "Costanza Day", "Festivus"], 
        correctAnswer: 1
        }, {
        question: "What type of pasta does Kramer use to make a statue of Jerry?",
        answers: ["Ravioli", "Spaghetti", "Penne", "Fusilli"],  
        correctAnswer: 4
        }, {
        question: "How does Jerry describe Elaine's questionable dance moves?",
        answers: ["little kicks", "jimmy legs", "jimmy arms", "the twist"],
        correctAnswer: 1
        }, {
        question: "Which NHL team is Puddy a big fan of?",
        answers: ["NY Islanders", "Buffalo Sabres", "Boston Bruins", "New Jersey Devils"],
        correctAnswer: 4
        }, {
        question: "What is the fictional name of the coffee shop that the gang always meets in?",
        answers: ["Tom's", "Monk's", "Ned's", "Reggie's"],
        correctAnswer: 2
        }, {
        question: "Who is Jerry's favorite superhero?",
        answers: ["Batman", "Spiderman", "Superman", "Green Lantern"],
        correctAnswer: 3
        }, {
        question: "What profession does George always want to pretend to have?",
        answers: ["Architect", "Doctor", "Lawyer", "Archeologist"],
        correctAnswer: 1
        }, {
        question: "What is the name of the cologne Kramer creates and attempts to sell to Calvin Klein?",
        answers: ["Ocean breeze", "polo", "sea air", "the beach"],
        correctAnswer: 4
        }, {
        question: "Which baseball team does George end up working for?",
        answers: ["The Mets", "The Yankees", "The Red Sox", "The Pirates"],
        correctAnswer: 2
        }, {
        question: "During which movie does Jerry get busted for making out during?",
        answers: ["Chunnel", "Rochelle Rochelle", "Schindlers list", "Sack Lunch"],
        correctAnswer: 3
}];
//function to start the process on clicks 
function startGame() {  

    $(".btn").on("click", function() {
        $("button").hide(); 
        $("#timer").html("<h2>" + "01:00" + "</h2>");   
        run();
        askQuestion();
        addChoices();
    });
}

//functions to run the timer
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop(){
    clearInterval(intervalId);
}

function decrement(){
    timer--;
    var converted  = timeConverter(timer);
    $("#timer").html("<h2>" + converted + "</h2>");
    if (timer === 0) {
        stop();
        alert("Time is up!");
    }
}
//convert time to look like a clock 00:00
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes  = "0" + minutes;
    }

    return minutes  + ":" + seconds;
}

//tried to figure out a function to ask the question but was unable to apply this concept to every question

function askQuestion(){
    var currentQuestion = myQuestions[numberQuestion].question;
    for(var i = 0; i < myQuestions.length; i++) {
    $("#quiz").html("<h2>" + myQuestions[numberQuestion].question + "</h2>");
    console.log(currentQuestion);
    }
};
// attempt to add the choices for answers to the radio buttons in html
function addChoices() {
    for(var i = 0; i < 4; i++) {
    $("#customRadioInline1").add(myQuestions.answers[i]);
    console.log(myQuestions.answers[i]);
    }

}//other attempts at adding questions and answers to the page


    // var $choices = $("#customRadioInline1")
    // $choices.empty();
    // for(var i = 0; i < 4; i++) {
    //     var $input = $('<input type="radio"/>');
    //     var id = "option" + i;
    //     $input.attr("id", id);
    //     $input.attr("name", "radio");
    //     var $label = $('<label />');
    //     $label.attr("for", id);
    //     $label.html(myQuestions.answers[i]);
    //     $optionsDiv.append($input);
    //     $optionsDiv.append($label);
//     }

// }


    // var questionOutput = [];
    // for(var i = 0; i <= myQuestions.length; i++) {
    // answers = [];
    // for(letter in myQuestions[i].answers){
    //     answers.push('div' + '<input type="radio" name="question' + i +' "value="'+ letter +'">'
    //      + letter + ': ' + myQuestions[i].answers[letter] + '</div>');
    // }

    // questionOutput.push(
    //     '<div class="quiz">' + myQuestions[i].question + '</div>' + '<div class="answers">' +  answers.join('') + '</div>'
    // );
    // questionOptions.html(myQuestions.question);
    // questionOptions.attr('');
    // $(".quiz").append(questionOptions);

    // for(var i = 0; i < 4; i++){
    //     var answerOptions = $("<div>");
    //     answerOptions.text(myQuestions[numberQuestion].answers[i]);
    //     answerOptions.attr({'data-index': i});
    //     $('.answers').append(answerOptions);

//PSEUDOCODED SECTION - items needed still needed to be completed

//create variables for user selection
//create conditional to decide if the user selection was right or wrong
//create an display to show how many answers were answered correct/wrong
//create submit button to end and submit quiz before timer is up

startGame();



    
