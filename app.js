
const form = document.querySelector('.form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const changePassword = document.querySelector('#change-password')
const btn = document.querySelector('button')

const nameRegex = /^[A-Z][a-zA-Z0-9]{5,14}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    if(nameRegex.test(username.value)){
        console.log(username.value)
    }else{
        alert('Username does not match the required pattern');
    }

    if(emailRegex.test(email.value)){
        console.log(email.value)
    }else{
        alert('Email does not match the required pattern');
    }

    if(passwordRegex.test(password.value)){
        console.log(password.value)
    }else{
        alert('Password does not match the required pattern');
    }
    if (password.value === changePassword.value) {
        console.log(changePassword.value);
    } else {
        alert('Passwords do not match');
    }
    if(nameRegex.test(username.value) && emailRegex.test(email.value) && passwordRegex.test(password.value) && (password.value === changePassword.value)){
        console.log(username.value, email.value, password.value, changePassword.value)
    }else{
        alert('All fields are required');
    }
    
})
