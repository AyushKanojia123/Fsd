document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const userList = document.getElementById('userList');
    const logoutBtn = document.getElementById('logoutBtn');
    const sortOptions = document.getElementById('sortOptions');

    // Login functionality
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert('Login successful!');
                window.location.href = 'dashboard.html'; // Redirects to dashboard.html
            } else {
                alert('Please enter valid credentials');
            }
        });
    }

    // Fetch and display detailed information about the top 10 GitHub users
    if (fetchUsersBtn) {
        fetchUsersBtn.addEventListener('click', () => {
            fetch('https://api.github.com/users?per_page=10')
                .then(response => response.json())
                .then(data => {
                    userList.innerHTML = ''; // Clear any existing content

                    data.forEach(user => {
                        // Fetch detailed data for each user
                        fetch(user.url)
                            .then(response => response.json())
                            .then(userData => {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = `
                                    <strong>Username:</strong> ${userData.login} <br>
                                    <strong>Profile URL:</strong> <a href="${userData.html_url}" target="_blank">${userData.html_url}</a> <br>
                                    <strong>Public Repos:</strong> ${userData.public_repos} <br>
                                    <strong>Followers:</strong> ${userData.followers} <br>
                                    <strong>Following:</strong> ${userData.following}
                                `;
                                userList.appendChild(listItem);
                            })
                            .catch(error => console.error('Error fetching user details:', error));
                    });
                })
                .catch(error => console.error('Error fetching users:', error));
        });
    }

    // Sort user list functionality
    if (sortOptions) {
        sortOptions.addEventListener('change', () => {
            const items = Array.from(userList.getElementsByTagName('li'));
            if (sortOptions.value === 'alphabetical') {
                items.sort((a, b) => a.textContent.localeCompare(b.textContent));
            } else {
                items.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
            }
            userList.innerHTML = '';
            items.forEach(item => userList.appendChild(item));
        });
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('You have been logged out.');
            window.location.href = 'login.html'; // Redirects to login.html
        });
    }
});
