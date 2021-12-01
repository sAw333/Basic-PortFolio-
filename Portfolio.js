
const form = document.querySelector('form')
const button = document.querySelector('button')
const h1 = document.querySelector('h1')
const input = document.querySelector('input')
form.addEventListener('submit' , function(e){
    e.preventDefault();
    const h2 = document.createElement('h2')
    h2.classList.add('trans')
    h2.textContent = ` Hello ${input.value}, Nice to have you here. I hope you're doing well.`
    h1.insertAdjacentElement('afterend', h2)
    input.value = ''
    button.disabled = true
    input.disabled=true
})

    