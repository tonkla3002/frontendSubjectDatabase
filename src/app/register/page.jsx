"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import axios from 'axios';


const RegisterPage = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password match and required fields
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (!userName || !email || !password || !confirmPassword) {
            setError("Please complete all inputs!");
            return;
        }

        try {
            // Make an Axios POST request to the registration endpoint
            const response = awaitaxios.get(process.env.URL_BACKEND+'/usersRegister', {
                email,
                userName,
                password,
            });

            if (response.status === 200) {
                setError("");
                setSuccess("User registration successful.");
                e.target.reset(); // Reset the form
            } else {
                setError("User registration failed.");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Register Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>

                    {error && (
                        <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md">
                            {success}
                        </div>
                    )}

                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        className='block bg-gray-300 p-2 my-2 rounded-md'
                        type='text'
                        placeholder='Enter your name.'
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='block bg-gray-300 p-2 my-2 rounded-md'
                        type='email'
                        placeholder='Enter your email.'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='block bg-gray-300 p-2 my-2 rounded-md'
                        type='password'
                        placeholder='Enter your password.'
                    />
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='block bg-gray-300 p-2 my-2 rounded-md'
                        type='password'
                        placeholder='Confirm your password.'
                    />
                    <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign Up</button>
                </form>
                <hr className='my-3' />
                <p>Do not have an account? Go to <Link className='text-blue-500 hover:underline' href='/login'>Login</Link> Page</p>
            </div>
        </div>
    );
};

export default RegisterPage;
