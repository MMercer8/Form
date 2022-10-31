const name = document.getElementById('first_name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorElement = document.getElementById('error');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    let messages = [];
   if (name.value ==="" || name.value == null) {
    messages.push('Name is required');
   }
    if (password.value !== confirmPassword.value) {
        messages.push("passwords do not match.");
    }    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

});

form.addEventListener('change', (e) => {
     let messages = [];
//    if (name.value ==="" || name.value == null) {
//     messages.push('Name is required');
//    }
    if (password.value != confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        console.log(password.classList + " " + confirmPassword.classList);
        messages.push("passwords do not match.");
        errorElement.innerText = messages.join(', ');
    }    else if (password.value == confirmPassword.value) {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        messages.pop();
        errorElement.innerText = messages.join(', ');
    }
       
if (password.value.length <= 6 ) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    messages.push ('Password must be longer than 6');

    errorElement.innerText = messages.join(', ');

}


    // if (messages.length > 0) {
    //     e.preventDefault();
    //     errorElement.innerText = messages.join(', ');
    // }

});