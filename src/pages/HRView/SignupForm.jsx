// SignupForm.js
import React, { useState } from 'react';
import instance from '../../axios';
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // Prevent the default submit event
    e.preventDefault();
    try {
      
    const response = await instance.post('/accounts/signup/', formData);
    console.log(response);
    console.log(response.data);
        navigate('/verify-email');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
<Container >
  <Row className="vh-100 d-flex justify-content-center align-items-center">
    <Col md={10} lg={8} xs={12}>
      <div className="border border-3 border-primary" ></div>
      <Card className="shadow" style={{ backgroundColor: 'white', padding: '5px', width: '200%' }} >
        <Card.Body>
          <div className="mb-3 mt-4">
            <h2 className="fw-bold mb-2 text-uppercase">Welcome!!!</h2>
            <p className=" mb-5">Please enter your details to sign up!</p>
            <Form onSubmit={handleSubmit} className="mb-3">
              <Row className="mb-3" style={{width: '100%'}}>
                <Form.Group as={Col} controlId="firstName" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName" className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mb-5" style={{width: '100%'}}>
                <Form.Group as={Col} controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Row>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
            <div className="mt-3">
              <p className="mb-0  text-center">
                Already have an account?{" "}
                <a href="/" className="text-primary fw-bold">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
  );
}

export default SignupForm;
