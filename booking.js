const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const num = document.getElementById('num');
let inputs = document.querySelectorAll('input');
const form = document.querySelector('.form')

decrease.addEventListener('click', () => {
    if(num.innerHTML <= 0){
        return;
    } else {
        num.innerHTML = num.innerHTML - 1;
    }
})

increase.addEventListener('click', () => {
    num.innerHTML = parseInt(num.innerHTML) + 1;
})

inputs = Array.from(inputs)
inputs.forEach(input => {
    form.addEventListener('submit', () => {
            if(!input.checkValidity()){
            input.classList.add("invalid")
        }
        })
})