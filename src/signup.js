document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Form submissions
    async function handleFormSubmit(event, formType) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        let endpoint;
        if (formType === 'signup') {
            endpoint = '/users';
        } else if (formType === 'login') {
            endpoint = '/users';
        }

        try {
            const response = await fetch(`http://localhost:3002${endpoint}`);
            const users = await response.json();

            if (formType === 'signup') {
                // Check if username already exists
                const userExists = users.find(user => user.username === data.newUsername);
                if (userExists) {
                    alert('Username already taken');
                    return;
                }

                // Create new user
                const newUser = {
                    id: users.length + 1,
                    username: data.newUsername,
                    email: data.newUsername + "@example.com", // Assuming email is username@example.com
                    password: data.newPassword
                };

                const signupResponse = await fetch(`http://localhost:3002/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });

                if (signupResponse.ok) {
                    window.location.href = '/community.html';
                } else {
                    alert('Sign up failed');
                }
            } else if (formType === 'login') {
                // Authenticate user
                const user = users.find(user => user.username === data.username && user.password === data.password);
                if (user) {
                    window.location.href = '/community.html';
                } else {
                    alert('Invalid username or password');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request.');
        }
    }

    // Add event listeners to the forms
    signupForm.addEventListener('submit', (event) => handleFormSubmit(event, 'signup'));
    loginForm.addEventListener('submit', (event) => handleFormSubmit(event, 'login'));
});
