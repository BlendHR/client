import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log('email:', email);
  console.log('password:', password);

  // const handleLogin = async () => {
  //   try {
  //     const response = await instance.post('/accounts/login/', {
  //       email,
  //       password,
  //     });
  
  //     console.log(response);
  //     console.log(response.data);
  
  //     // extract the token from the response
  //     const token = response.data.token; // replace 'key' with the actual property name for the token
  //     console.log('token:', token);
  //     // store the token in local storage
  //     localStorage.setItem('token', token);
  
  //     // navigate to the home page
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     setError('Invalid email or password');
  //   }
  // };
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
