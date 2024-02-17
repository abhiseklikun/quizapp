import React, { useState } from 'react';

const SignInForm = () => {
  // State to hold user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSignIn = (e: React.FormEvent) =>
   {
    e.preventDefault();

    // Add your authentication logic here, for simplicity, just log the input for now
    console.log(`Signing in with Email: ${email} and Password: ${password}`);
  };

  return (
    <form onSubmit={handleSignIn}>
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
