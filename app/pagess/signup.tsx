"use client"
import React, { useState } from 'react';

const SignUpForm = () => {
  // State to hold user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    try {
      // Submit data to Formspree
      const response = await fetch('https://formspree.io/f/mbjnoayn',
       {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        // Form submission successful, you can redirect or perform other actions here
        console.log('Form submitted successfully!');
      } else {
        // Form submission failed, handle the error
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  return (
    <form onSubmit={handleSignUp} action="https://formspree.io/your-formspree-email" method="POST">
      {/* Name input */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Email input */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Password input */}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Submit button */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
