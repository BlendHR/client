// SignupForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organizationName: '',
    domainName: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // Prevent the default submit event
    e.preventDefault();
    try {
    //   const response = await axios.post('/api/signup', formData);
    //   // Assuming the backend returns a success message or redirects to the verification page
    //   navigate('/verify-email');
    //   // Change this to above
        navigate('/verify-email');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="organizationName">
        <Form.Label>Organization Name</Form.Label>
        <Form.Control
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="domainName">
        <Form.Label>Domain Name (Optional)</Form.Label>
        <Form.Control
          type="text"
          name="domainName"
          value={formData.domainName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignupForm;
