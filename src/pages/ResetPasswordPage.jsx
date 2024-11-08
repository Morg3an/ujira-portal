import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import Layout from '../components/Layout';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Request password reset
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setMessage('Password reset email sent.');
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        {message && (
          <div className="mb-4 text-red-500">{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;
