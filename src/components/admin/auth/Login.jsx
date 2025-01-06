import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Toast import
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();


    // Check if both email and password are provided
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return; // Prevent form submission if fields are empty
    }

    try {
      const response = await axios.post('https://api.thinktankinfotech.com/api/login', {
        email,
        password,
      });

      // Save the authentication token in localStorage
      localStorage.setItem('auth_token', response.data.token);

      // Show success toast
      toast.success('Login successful!');

      // Redirect to a protected page (e.g., dashboard)
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error('Incorrect email or password.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-green-600">Login</h1>
          <p className="text-gray-500 mb-4">Sign in to your account</p>
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-end items-center mb-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;