
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const validUsername = 'usuario';
    const validPassword = 'senha123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'discovery.html'; 
    } else{
        document.getElementById('error-message').textContent = 'Usuário ou senha incorreta.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'Usuário já existe. Tente outro nome.';
        return;
    }

    localStorage.setItem(newUsername, newPassword);

    window.location.href = 'login.html';
});


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
      
        window.location.href = 'index.html'; // Substitua pela URL desejada
    } else {
        // Exibe uma mensagem de erro se as senhas não coincidem
        alert('As senhas não coincidem. Por favor, tente novamente.');
    }
});