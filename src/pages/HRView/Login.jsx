import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Fade } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { async_login, async_get_recruiter, get_user_info, async_create_recruiter_profile } from '../../../api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [is_loading, setIsLoading] = useState(false);
  const [show_alert, setShowAlert] = useState(false);
  const [alert_variant, setAlertVariant] = useState('success');
  const [alert_message, setAlertMessage] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await async_login(email, password);
    setIsLoading(false);
    if (response) {
      // Check if response contains data indicating successful login
      if (response.status === 200 && response.data) {
        // Set state variables to render success alert
        setAlertVariant('success');
        setAlertMessage('Login successful');
        const user_info = await get_user_info();
        if (!user_info){
          setAlertVariant('success');
          setAlertMessage('Setting up your account');
        }
        navigate('/');
      }else {
        // Set state variables to render error alert if response does not contain data
        setAlertVariant('danger');
        setAlertMessage('Login failed: invalid credentials');
      }
    } else {
        // Set state variables to render error alert if response is null
        setAlertVariant('danger');
        setAlertMessage('Login failed: server error');
    }
    setShowAlert(true);
  }

  const handleSignup = () => {
    navigate('/signup');
  }
  
  return (
    // make it at center of page
    <div>
      {show_alert ? (
        <Alert variant={alert_variant} onClose={() => setShowAlert(false)} dismissible transition>{alert_message}</Alert>
      ) : null}

      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
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
            {is_loading ? 'Loading...' : 'Login'}
          </Button>{' '}
          <Button variant="link" onClick={handleSignup}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
    
  );
}

export default Login;
