document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    const existingUser = localStorage.getItem(username);

    if (existingUser) {
        document.getElementById('register-message').textContent = 'Username already taken!';
    } else {
        const user = { username: username, password: password };
        localStorage.setItem(username, JSON.stringify(user));
        document.getElementById('register-message').textContent = 'Account created successfully!';
    }
});
