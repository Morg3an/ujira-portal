import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import Layout from '../components/Layout';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    knidCredential: false,
    errorMessage: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, role, knidCredential } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !role) {
      setFormData({ ...formData, errorMessage: 'Please fill in all required fields.' });
      return;
    }

    // Register user with Supabase
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          role,
          knidCredential
        }
      }
    });

    if (error) {
      setFormData({ ...formData, errorMessage: error.message });
      return;
    }

    console.log('User registered:', user);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      knidCredential: false,
      errorMessage: ''
    });

    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        {formData.errorMessage && (
          <div className="mb-4 text-red-500">{formData.errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="employer">Employer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">KNID Credential</label>
            <input
              type="checkbox"
              name="knidCredential"
              checked={formData.knidCredential}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Do you have a KNID credential?</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegistrationPage;