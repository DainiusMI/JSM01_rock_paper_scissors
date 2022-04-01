var usersOptions = document.getElementById('users-options');
var usersChoice = usersOptions.getElementsByClassName('value-title');
var textEdit = document.getElementById('textArea');
// variables just for coloring pc choice
var pcArea = document.getElementById('pc-options');
var pcOptions = pcArea.getElementsByClassName('value-area');
// variables for updating game
var pcScore = document.getElementById('pc-score').innerText;
var userScore = document.getElementById('user-score').innerText;
var userName = document.getElementById('user-name-input');




let gameValues = ['rock', 'paper', 'scissors'];

function getUserName() {
    const userName = document.getElementById('user-name-input').value;
    document.getElementById('user-name').innerText = userName;

}
function pcScoreUpadate() {
    document.getElementById('pc-score').innerText = pcScore;
}
function userScoreUpdate() {
    document.getElementById('user-score').innerText = userScore;
}
function resetScore() {
    document.getElementById('pc-score').innerText = 0;
    document.getElementById('user-score').innerText = 0;
    userScore = pcScore = 0;
}

function runGame(x) {

    //   your selection
    let userChoice = usersOptions.getElementsByClassName('value-title')[x].innerText;
    //  pc selectiono generator
    pcChoice = gameValues [ Math.floor(Math.random()*3) ];

    var pcDisplay = document.getElementById(pcChoice);
    pcDisplay.classList.add("pc-choice-display");

    for (var i = 0; i < 3; i++) {
        if (gameValues[i] == pcChoice) {
            pcDisplay.classList.add("pc-choice-display");
        }
        else
            pcOptions[i].classList.remove("pc-choice-display");
    }


    switch (userChoice) {
        case 'rock':
            switch (pcChoice) {
                case 'rock': 
                textEdit.innerText = 'DRAW';
                break;
                case 'paper': 
                textEdit.innerText = 'YOU HAVE LOST';
                pcScore ++;
                break;
                case 'scissors':
                textEdit.innerText = 'YOU HAVE WON';
                userScore ++;               
                break;
            }
            break;
        case 'paper':
            switch (pcChoice) {
                case 'paper': 
                textEdit.innerText = 'DRAW';
                break;
                case 'scissors': 
                textEdit.innerText = 'YOU HAVE LOST';
                pcScore ++;
                break;
                case 'rock':
                textEdit.innerText = 'YOU HAVE WON';
                userScore ++;      
                break;
            }
            break;
        case 'scissors':
            switch (pcChoice) {
                case 'scissors': 
                textEdit.innerText = 'DRAW';
                break;
                case 'rock': 
                textEdit.innerText = 'YOU HAVE LOST';
                pcScore ++;
                break;
                case 'paper':
                textEdit.innerText = 'YOU HAVE WON';
                userScore ++;      
                break;
            }    
            break;       
    }
    pcScoreUpadate(pcScore);
    userScoreUpdate(userScore)
    if (pcScore == 5) {
        resetScore();
        alert("YOU HAVE LOST THIS MATCH");
    }
    if (userScore == 5) {
        resetScore();
        alert("YOU HAVE WON THIS MATCH");
    }
}

var userInfo = document.getElementById('info-container')
var gameContainer = document.getElementById('game-container');
function fade() {
    var formOpacity = 1;
    var gameOpacity = 0;
    var timer = setInterval(
        function() {
            if (formOpacity <= 0.1) {
                clearInterval(timer);
                userInfo.style.display = 'none';

                gameContainer.style.display = 'flex';
                }
                userInfo.style.opacity = formOpacity;
                userInfo.style.filter = 'alpha(opacity=' + formOpacity * 100 + ")";
                formOpacity -= formOpacity * 0.1;

                gameContainer.style.opacity = gameOpacity;
                gameContainer.style.filter = 'alpha(opacity=' + gameOpacity * 100 + ")";
                gameOpacity += formOpacity * 0.1;
            },
    50
    );
}
function validateName() {
    let inputCheck = document.getElementById('user-name-input').value;
    if (inputCheck == '') {
        alert("Name must be filled out");
        return false;
    }
    else {
        fade()
    }
}








