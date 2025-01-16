window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'index.html';
    }

    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
};
