import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'; // Import Axios

function JobPostForm() {
  // Define state variables
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to DRF API endpoint
      await axios.post('your-api-endpoint-url', {
        job_title: jobTitle,
        city,
        country,
        timezone
      });
      // Reset form fields after successful submission
      setJobTitle('');
      setCity('');
      setCountry('');
      setTimezone('');
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter job title" 
            value={jobTitle} 
            onChange={(e) => setJobTitle(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTimezone">
          <Form.Label>Timezone</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter timezone" 
            value={timezone} 
            onChange={(e) => setTimezone(e.target.value)} 
            required 
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JobPostForm;
