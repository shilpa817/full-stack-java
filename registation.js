
document.getElementById('registationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message= document.getElementById('message');
    if(name === '' || email === '' || password === '' || confirmPassword === '') {
        message.innerHTML = 'Please fill in all fields.';
        return;
    }
    if(password.length < 5) {
        message.innerHTML = 'Password must be at least 5 characters long.';
        return;
    }
    if(password !== confirmPassword) {
        message.innerHTML = 'Passwords do not match.';
        return;
    }
    message.innerHTML = 'Registation successful!';
    message.style.color = 'green';
});
