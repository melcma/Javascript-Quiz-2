var curPos = 0,
    selected = 0,
    score = 0;

// displays current question
function display(){
    if (curPos<questions.length){
        document.getElementsByClassName("question")[0].innerHTML = questions[curPos].question;
        for (var button = 0; button<4; button++)
            document.getElementsByTagName("button")[button].innerHTML = questions[curPos].choices[button];
    } else {
        finish();
    }
}

// changes background color and returns selected button
(function(){
    for (var button = 0; button<4; button++){
        document.getElementsByTagName("button")[button].onclick = function(){
            unselect();
            this.style.background = "rgb(70, 180, 200)";
            selected = this;
        };
    }
}())

// clears background changes
function unselect(){
    for (var rest = 0; rest<document.getElementsByTagName("button").length-1; rest++){
        document.getElementsByTagName("button")[rest].style.background = "rgb(110, 220, 200)";
    }
}
// checks if answer is correct
function check(selected){
    if (selected.innerHTML == questions[curPos].choices[questions[curPos].correct-1]){
        console.log("correct");
        score++;
    }
}

// displays score screen
function finish(){
    document.getElementsByClassName("container")[0].innerHTML =
        "<div class='col-md-12 final'>" +
        "<h2>You have finished quiz</h2>" +
        "<h3>Your score is: " + score + "</h3>" +
        "</div>";
}

// main game logic
document.getElementById("submit").onclick = function nextQ (){

    if(!selected){
        alert("Please select an option!");
        return 0;
    }
    check(selected);
    curPos++;
    display();
    unselect();
}


display();