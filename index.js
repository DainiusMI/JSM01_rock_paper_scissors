var usersOptions = document.getElementById('users-options');
var usersChoice = usersOptions.getElementsByClassName('value-title');
var textEdit = document.getElementById('textArea');
// variables just for coloring pc choice
var pcArea = document.getElementById('pc-options');
var pcOptions = pcArea.getElementsByClassName('value-area');
// variables for updating score
var pcScore = document.getElementById('pc-score').innerText;
var userScore = document.getElementById('user-score').innerText;



let gameValues = ['rock', 'paper', 'scissors'];


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
                textEdit.innerText = 'DRAW22';
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
           
        default:
        
            
    }
    pcScoreUpadate(pcScore);
    userScoreUpdate(userScore)
    if (pcScore == 5) {
        resetScore();
        textEdit.innerText = 'YOU HAVE LOST THIS MATCH';
    }
    if (userScore == 5) {
        resetScore();
        textEdit.innerText = 'YOU HAVE WON THIS MATCH';
    }
}










