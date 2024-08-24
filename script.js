
let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to handle input and apply active state
function handleInput(inputChar, button = null) {
    if (inputChar === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = "Error";
        }
    } else if (inputChar === 'AC' || inputChar === 'c') {
        string = "";
        input.value = string;
    } else if (inputChar === 'DEL' || inputChar === 'Backspace') {
        string = string.substring(0, string.length-1);
        input.value = string;
    } else {
        string += inputChar;
        input.value = string;
    }

    // Apply active state to the button
    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 150); 
       
  }
}

// Click event handling
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML, e.target);
    });
});

// Keydown event handling
document.addEventListener('keydown', (e) => {
    const key = e.key;
    let button = Array.from(buttons).find(btn => btn.innerHTML === key);
    if (button) {
        handleInput(key, button);
    } else if (key === 'Enter' || key === '=') {
        handleInput('=', button);
    } else if (key === 'Backspace' || key === 'Delete') {
        handleInput('DEL', button);
    } else if (key === 'Escape' || key === 'c') {
        handleInput('AC', button);
    }
});
