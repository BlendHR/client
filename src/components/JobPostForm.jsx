import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card ,Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import instance from '../axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function JobPostForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [richOverview, setRichOverview] = useState('');
  const [workSite, setWorkSite] = useState('');
  const [workType, setWorkType] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [postedOn, setPostedOn] = useState('');

  const [success, setSuccess] = useState('');
  const history = useNavigate();


  const user = useContext(UserContext);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await instance.post('jobs/', {
        creater_id: 1,
        job_title: jobTitle,
        overview: overview,
        work_site: workSite,
        work_type: workType,
        is_open: isOpen,
        posted_on: new Date().toISOString().slice(0, 16)
      }
    );

      setSuccess('Job created successfully');
      setTimeout(() => history('/jobs'), 2000);
      console.log(response.data);
    } catch (error) {
      console.error('Create job error:', error);
    }
  };

return (
  <>
  <h1>Job Post Form</h1>
  <Container style={{ marginTop: '2rem', width: '200px' }} >
  <Card style={{ width: '300%' }}>
    <Card.Body style={{ marginTop: '2rem', width: '100%' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGridJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter job title" 
            value={jobTitle} 
            onChange={(e) => setJobTitle(e.target.value)} 
            required 
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formGridWorkSite">
          <Form.Label>Work Site</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter work site" 
            value={workSite} 
            onChange={(e) => setWorkSite(e.target.value)} 
            required 
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formGridOverview">
          <Form.Label>Overview</Form.Label>
          <ReactQuill 
            placeholder="Enter overview" 
            value={richOverview} 
            onChange={(content, delta, source, editor) => {
              setRichOverview(content);
              setOverview(editor.getText().trim());
            }} 
            />
        </Form.Group>
        <br />
        <Form.Group controlId="formGridWorkType">
          <Form.Label>Work Type</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter work type" 
            value={workType} 
            onChange={(e) => setWorkType(e.target.value)} 
            required 
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formGridIsOpen">
          <Form.Check 
            type="checkbox" 
            label="Is Open" 
            checked={isOpen} 
            onChange={(e) => setIsOpen(e.target.checked)} 
          />
        </Form.Group> 
        <br />
        <Form.Group controlId="formGridPostedOn">
          <Form.Label>Posted On</Form.Label>
          <Form.Control 
            type="datetime-local" 
            value={new Date().toISOString().slice(0, 16)}
            onChange={(e) => setPostedOn(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card.Body>
  </Card>
  </Container>
  </>
);
}

export default JobPostForm;