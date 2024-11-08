const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector('.scissors-btn');
const userHand = document.querySelector('.user.hand-icon');
const computerHand = document.querySelector('.computer.hand-icon');
const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')


const rockIcon = '✊';
const paperIcon = '🤚'
const scissorsIcon = '✌️'

const iconsList = [rockIcon, paperIcon, scissorsIcon]

function calculateResult(selectedIcon, winningIcon){
    result.innerText = ''
    userHand.innerText = '🤜'
    computerHand.innerText = '🤛'
    userHand.classList.add('shakeUserHands')
    computerHand.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHand.classList.remove('shakeUserHands')
        computerHand.classList.remove('shakeComputerHands')
        userHand.innerText = selectedIcon
        const computerChoice = Math.floor(Math.random() * 3)
        computerHand.innerText = iconsList[computerChoice]
        if (userHand.innerText === computerHand.innerText) {
            result.innerText = 'Draw'
        } else if (computerHand.innerText === winningIcon) {
            result.innerText = 'Hurrah!! You Won'
            userScore.innerText = +userScore.innerText + 1
        } else {
            result.innerText = 'Computer Won'
            computerScore.innerText = +computerScore.innerText + 1
        }
    }, 2000)

}

rockBtn.addEventListener('click', () => {
   calculateResult(rockIcon, scissorsIcon)
})

paperBtn.addEventListener('click', () => {
    calculateResult(paperIcon, rockIcon)
})

scissorsBtn.addEventListener('click', () => {
    calculateResult(scissorsIcon, paperIcon)
})