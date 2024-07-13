const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    console.log('button');
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'pink'){
            body.style.background = e.target.id
        }if(e.target.id === 'white'){
            body.style.background = e.target.id
        }if(e.target.id === 'blue'){
            body.style.background = e.target.id
        }if(e.target.id === 'yellow'){
            body.style.background = e.target.id
        }if(e.target.id === 'green'){
            body.style.background = e.target.id
        }

    })
})