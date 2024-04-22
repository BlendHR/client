import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {

    event.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/api/accounts/login', { email, password }); // Replace with your DRF authentication endpoint

        // Save the auth token in local storage
        localStorage.setItem('authToken', response.data.token);
        console.log('Login successful');
    } catch (error) {
        console.error('There was an error!', error);
    }
};

  const handleSignup = () => {
    // Redirect to the signup page
    navigate('/signup');
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleLogin}>
        Login
      </Button>{' '}
      <Button variant="link" onClick={handleSignup}>
        Sign Up
      </Button>
      {error && <p className="text-danger">{error}</p>}
    </Form>
  );
}

export default Login;
