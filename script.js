function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Будь ласка, заповніть всі поля');
        return;
    }
    
    alert('Успішний вхід! Перенаправляємо...');
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    if (!name || !email || !password || !confirm) {
        alert('Будь ласка, заповніть всі поля');
        return;
    }
    
    if (password !== confirm) {
        alert('Паролі не співпадають');
        return;
    }
    
    if (password.length < 6) {
        alert('Пароль повинен містити щонайменше 6 символів');
        return;
    }
    
    alert('Реєстрація успішна! Вітаємо, ' + name);
    switchToLogin();
}