"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'



const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password match and required fields

    if (!userName || !password) {
      setError("Please complete all inputs!");
      return;
    }
      try {
        const response = await axios.get(process.env.URL_BACKEND+'/usersLogin', {
          userName,
          password,
        });
        localStorage.setItem('userName', userName);
        console.log(localStorage.getItem('userName'))
        setSuccess(response.data.message);
        setError("");

        router.push('/dashBoard');
      } catch (err) {
        setError(err.response?.data?.message || "Login failed");
        setSuccess("");
      }
    
  };



  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>Login Page</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <input
            onChange={(e) => setUserName(e.target.value)}
            className='block bg-gray-300 p-2 my-2 rounded-md'
            type='text'
            placeholder='Enter your name.'
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className='block bg-gray-300 p-2 my-2 rounded-md'
            type='password'
            placeholder='Enter your password.'
          />

          <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign In</button>
        </form>
        <hr className='my-3' />
        <p>Already have an account? go to <Link className='text-blue-500 hover:underline' href='/register'> Register</Link> Page</p>
      </div>
    </div>
  )
}

export default LoginPage