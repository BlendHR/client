// SignupForm.js
import React, { useState } from 'react';
import {
  Alert,
  Col,
  Button,
  Row,
  Container,
  Form,
} from "react-bootstrap";

import { useNavigate } from 'react-router-dom';

import { async_signup } from '../../../api';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organization: '',
    city: '',
    country: '',
  });
  const [is_loading, setIsLoading] = useState(false);
  const [show_alert, setShowAlert] = useState(false);
  const [alert_variant, setAlertVariant] = useState('success');
  const [alert_message, setAlertMessage] = useState('');

  const handleSubmit = async (e) => {
    // Prevent the default submit event
    e.preventDefault();
    setIsLoading(true);
    const response = await async_signup(formData);
    if (response) {
      if (response.status === 201) {
        // Redirect to the login page
        setAlertMessage('Signup successful!\nWe\'ve sent you an email to verify your account.');
        setAlertVariant('success');
      } else {
        setAlertMessage('Signup failed: invalid data');
        setAlertVariant('danger');
        // Handle error
        console.error("Error in signup:", response);
      }
    } else {
      setAlertMessage('Signup failed: server error');
      setAlertVariant('danger');
      // Handle error
      console.error("Error in signup: response is null");
    }
    setIsLoading(false);
    setShowAlert(true);
  }

  return (
    // center on page + left align content + margin between componenets + autofit content
    <div>
      {show_alert ? (
        <Alert variant={alert_variant} onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>{alert_message}</Alert.Heading>
        </Alert>
        ) : null
      }
      <Container className="shadow p-3 mb-5 bg-body rounded" >
              <Form>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" controlId="formGridOrgName">
                  <Form.Label>Name of Organization</Form.Label>
                  <Form.Control placeholder="My Organization" 
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </Form.Group>
                </Row> */}

                <Button className="my-btn" variant="primary" type="button" onClick={handleSubmit}>
                  {is_loading ? 'Loading...' : 'Sign Up'}
                </Button>{' '}
              </Form>
      </Container>
    </div>
  );
}

export default SignupForm;
