const countValue = document.querySelector('.value')
const minusButton = document.querySelector('.minus-button')
const plusButton = document.querySelector('.plus-button')
const changeBy = document.querySelector('.changeBy')
const resetButton = document.querySelector('.reset-button')

plusButton.addEventListener("click", () => {
    const counterValue = parseInt(countValue.innerText)
    const changeByValue = parseInt(changeBy.value)
    countValue.innerText = counterValue + changeByValue
})

minusButton.addEventListener("click", () => {
    const counterValue = parseInt(countValue.innerText)
    const changeByValue = parseInt(changeBy.value)
    countValue.innerText = counterValue - changeByValue
})

resetButton.addEventListener('click', () => {
    countValue.innerText = 0
})