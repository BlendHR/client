// EmailVerification.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerification = () => {
    // Send the verification code to the backend for verification
    // You can use axios or fetch to make a POST request to your backend API
    // Upon successful verification, redirect the user to the home page
    navigate('/home');
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <p>
        An email has been sent to your email address for verification.
        Please enter the six-digit code from the email to complete the signup process.
      </p>
      <Form>
        <Form.Group controlId="verificationCode">
          <Form.Label>Verification Code</Form.Label>
          <Form.Control
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            maxLength={6}
            minLength={6}
            pattern="\d{6}"
            placeholder="Enter 6-digit code"
            required
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleVerification}>
          Verify Account
        </Button>
      </Form>
    </div>
  );
}

export default EmailVerification;
