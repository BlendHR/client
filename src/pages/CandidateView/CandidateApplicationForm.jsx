import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import instance from '../../axios';
const CandidateApplicationForm = () => {
  const [candidateData, setCandidateData] = useState({
    first_name: 'Burhanuddin',
    last_name: 'Aliasghar',
    email: 'be07724@st.habib.edu.pk',
    country: 'Paksitan',
    phone: '+923152411248',
    linkedin_url: 'https://linkedin.com/in/burhanuddin6'
  });
  const [resumeFile, setResumeFile] = useState(null);
  const job_id = '12'; // Assuming job_id is constant for now

  const handleCandidateChange = (e) => {
    const { name, value } = e.target;
    setCandidateData({
      ...candidateData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append candidate data fields to FormData object separately
    formData.append('first_name', candidateData.first_name);
    formData.append('last_name', candidateData.last_name);
    formData.append('email', candidateData.email);
    formData.append('country', candidateData.country);
    formData.append('phone', candidateData.phone);
    formData.append('linkedin_url', candidateData.linkedin_url);

    // Append the resume file to FormData object
    formData.append('resume_file', resumeFile);

    // Append job_id to FormData object
    formData.append('job_id', job_id);

    try {
      const response = await instance.post('/api/create-candidate/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="first_name" value={candidateData.first_name} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="last_name" value={candidateData.last_name} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={candidateData.email} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" name="country" value={candidateData.country} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={candidateData.phone} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formLinkedinUrl">
        <Form.Label>LinkedIn URL</Form.Label>
        <Form.Control type="text" name="linkedin_url" value={candidateData.linkedin_url} onChange={handleCandidateChange} />
      </Form.Group>
      <Form.Group controlId="formResumeFile">
        <Form.Label>Resume File</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CandidateApplicationForm;
