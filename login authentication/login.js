document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.password === password) {
            // If credentials are correct, store session
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'secured.html';
        } else {
            document.getElementById('error-message').textContent = 'Invalid credentials!';
        }
    } else {
        document.getElementById('error-message').textContent = 'User not found!';
    }
});
