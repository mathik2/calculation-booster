var correct_answers = [];
var array_for_operators = ['+', '-', '*', '/']
var user_answers;
var score = 0

var values = document.querySelector('.time').innerHTML;

function start() {

    if (values >= 0) {
        document.querySelector('.time').innerHTML = values--;
    } else {
        document.querySelector('.time').innerHTML = '60';
        clearInterval(start)
        document.querySelector('.time').innerHTML = "Timeout";

        var tag = document.getElementById("questions")
        tag.style.display = "none";

    }
}

function ten_questions() {

    for (let i = 0; i < 10; i++) {

        let operandone = Math.floor(Math.random() * 1000) + 100
        let operator = array_for_operators[Math.floor(Math.random() * array_for_operators.length)]
        let operandtwo = Math.floor(Math.random() * 100)

        let result = Math.floor(eval(operandone + operator + operandtwo));
        correct_answers.push(result)
            //create element tag and to insert the operand and operators to the document
        let question_tag = document.createElement('li');
        question_tag.innerHTML = operandone + operator + operandtwo + "<input class='answer'>";
        document.querySelector('ol').appendChild(question_tag);

    }

}






function twenty_questions() {

    for (let i = 0; i < 20; i++) {

        let operandone = Math.floor(Math.random() * 1000) + 100
        let operator = array_for_operators[Math.floor(Math.random() * array_for_operators.length)]
        let operandtwo = Math.floor(Math.random() * 100)

        let result = Math.floor(eval(operandone + operator + operandtwo));
        correct_answers.push(result)
            //create element tag and to insert the operand and operators to the document
        let question_tag = document.createElement('li');
        question_tag.innerHTML = operandone + operator + operandtwo + "<input class='answer'>";
        document.querySelector('ol').appendChild(question_tag);


    }

}




function get_marks() {


    var items = document.getElementsByClassName('answer');

    user_answers = [].map.call(items, item => item.value);

    for (let i = 0; i < correct_answers.length; i++) {
        if (correct_answers[i] == user_answers[i]) {
            score += 1;
        }
    }
    document.getElementById('result').innerHTML = "Your score is : " + score;
}


function start_new() {
    // to refresh page
    location.reload();
}