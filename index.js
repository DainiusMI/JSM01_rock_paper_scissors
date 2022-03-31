var usersOptions = document.getElementById('users-options');
var usersChoice = usersOptions.getElementsByClassName('value-title');
var textEdit = document.getElementById('textArea');
var pcArea = document.getElementById('pc-options');
var pcOptions = pcArea.getElementsByClassName('value-area');





let gameValues = ['rock', 'paper', 'scissors'];

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


    // game rule logic starts
    if (userChoice == pcChoice) {
        console.log('draw');
        textEdit.innerText = 'DRAW';
    }
    
    if (pcChoice == 'rock') {
        if (userChoice == 'paper') {
            textEdit.innerText = 'YOU HAVE WON';
        }
        if (userChoice == 'scissors') {
            textEdit.innerText = 'YOU HAVE LOST';
        }
    }
    
    if (pcChoice == 'paper') {
        if (userChoice == 'scissors') {
            textEdit.innerText = 'YOU HAVE WON';
        }
        if (userChoice == 'rock') {
            textEdit.innerText = 'YOU HAVE LOST';
        }
    }
    
    if (pcChoice == 'scissors') {
        if (userChoice == 'rock') {
            textEdit.innerText = 'YOU HAVE WON';
        }
        if (userChoice == 'paper') {
            textEdit.innerText = 'YOU HAVE LOST';
        }
    }
    
    // game rules logic ends






}










