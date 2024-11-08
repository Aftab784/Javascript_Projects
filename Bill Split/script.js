const amountInput = document.querySelector('#bill-amount')
const tipContainer = document.querySelector('.tip-container.disabled')
const customTipInput = document.querySelector('.custom-tip')
const numberOfpeopleInput = document.querySelector('.number-of-people')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const tipAmountOutput = document.querySelector('.tip-amount span')
const totalBillOutput = document.querySelector('.total span')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const tipsContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')

let tipPercentage;

generateBillBtn.addEventListener('click', () => {
    const billAmount = parseInt(amountInput.value)
    const numberOfPeople = parseInt(numberOfpeopleInput.value)

    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBill = billAmount + tipAmount

    const eachPersonBill = totalBill / numberOfPeople


    tipAmountOutput.innerText = `Rs.${tipAmount}`
    totalBillOutput.innerText = `Rs.${totalBill}`
    eachPersonBillOutput.innerText = `Rs.${eachPersonBill}`

    resetBtn.disabled = false
})

tipsContainer.addEventListener('click', (e) => {
    if(tipsContainer.classList.contains('disabled')) return
    if(e.target !== tipsContainer){
        [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText)
        customTipInput.value =  ''

        if(numberOfpeopleInput.value && tipPercentage) {
            generateBillBtn.disabled = false
        } else {
            generateBillBtn.disabled = true
        }
    }

})

customTipInput.addEventListener('input', () => {
    tipPercentage = parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
    if(numberOfpeopleInput.value && tipPercentage) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})

resetBtn.addEventListener('click', () => {
    amountInput.value = ''
    numberOfpeopleInput.value = ''
    customTipInput.value = ''
    tipAmountOutput.innerText = ''
    totalBillOutput.innerText = ''
    eachPersonBillOutput.innerText = '';
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
    generateBillBtn.disabled = true
    resetBtn.disabled = true
})

amountInput.addEventListener('input', () => {
    if(amountInput.value) {
        customTipInput.disabled = false
        numberOfpeopleInput.disabled = false
        tipsContainer.classList.remove('disabled')
      
    } else{
        customTipInput.disabled = true
        numberOfpeopleInput.disabled = true
        tipsContainer.classList.add('disabled')
    }
})

numberOfpeopleInput.addEventListener('input', () => {
    if(numberOfpeopleInput.value && tipPercentage) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})