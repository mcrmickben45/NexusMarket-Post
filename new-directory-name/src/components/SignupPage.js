import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [newUser, setNewUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', { // Adjust this endpoint to your API
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                // Handle successful registration here
                navigate('/login'); // Redirect to login page
            } else {
                alert('Failed to register. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={newUser.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;
