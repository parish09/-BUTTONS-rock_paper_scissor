let scorep = 0;
let scorec = 0;
let x = Math.floor(Math.random() * 3);
let ip = '';
let user = 0;
let com;
let res;
let resf;

console.log(x);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#rock').addEventListener('click', () => { ip = 'rock', input(ip), refreshPage() });
    document.querySelector('#paper').addEventListener('click', () => { ip = 'paper', input(ip), refreshPage() });
    document.querySelector('#scissor').addEventListener('click', () => { ip = 'scissor', input(ip), refreshPage() });
});

function input(ip) {
    console.log("123");
    if (ip == "rock" || ip == "Rock")
        user = 0;
    else if (ip == "paper" || ip == "Paper")
        user = 1;
    else if (ip == "scissor" || ip == "Scissor")
        user = 2;
    computerplay(x);
}

function computerplay(x) {
    if (x == 0)
        com = 'Computer Chose Rock';
    if (x == 1)
        com = 'Computer Chose Paper';
    if (x == 2)
        com = 'Computer Chose Scissor';
    outcome(user, x);
}

function refreshPage() {
    window.location.reload();
}

function outcome(user, x) {
    if (user == 0 && x == 2) {
        res = 'CONGRATS YOU WIN!!!';
        scorep++;
    }
    if (user == 0 && x == 1) {
        res = 'SORRY YOU LOSE!!!';
        scorec++;
    }
    if (user == 1 && x == 0) {
        res = 'CONGRATS YOU WIN!!!';
        scorep++;
    }
    if (user == 1 && x == 2) {
        res = 'SORRY YOU LOSE!!!';
        scorec++;
    }
    if (user == 2 && x == 0) {
        res = 'SORRY YOU LOSE!!!';
        scorec++;
    }
    if (user == 2 && x == 1) {
        res = 'CONGRATS YOU WIN!!!';
        scorep++;
    }
    if (user == x) {
        res = 'IT\'S A DRAW';
    }
    alert(res + "\n" + "You chose " + ip + "\n" + com + "\n" + '\nSCORE : ' + scorec)
}

console.log(scorec);