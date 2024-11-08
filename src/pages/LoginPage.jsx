import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import Layout from '../components/Layout';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errorMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setFormData({ ...formData, errorMessage: 'Please fill in all required fields.' });
      return;
    }

    // Log in user with Supabase
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setFormData({ ...formData, errorMessage: error.message });
      return;
    }

    console.log('User logged in:', user);
    setFormData({
      email: '',
      password: '',
      errorMessage: ''
    });

    // Redirect to dashboard or home page after login
    window.location.href = '/';
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {formData.errorMessage && (
          <div className="mb-4 text-red-500">{formData.errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/reset-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;