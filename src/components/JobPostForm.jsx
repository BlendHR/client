import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import instance from '../axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function JobPostForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [workSite, setWorkSite] = useState('');
  const [workType, setWorkType] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [postedOn, setPostedOn] = useState('');

  const user = useContext(UserContext);

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    try {
      const response = await instance.post('jobs/', {
        creater_id: user.id,
        org_id: 'Habib University',
        salary:1,
        job_title: jobTitle,
        overview: overview,
        responsibilities: responsibilities,
        qualifications: qualifications,
        work_site: workSite,
        work_type: workType,
        is_open: isOpen,
        posted_on: new Date().toISOString().slice(0, 16)
      }
    );

      console.log(response.data);
    } catch (error) {
      console.error('Create job error:', error);
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

        <Form.Group as={Col} controlId="formGridWorkSite">
          <Form.Label>Work Site</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter work site" 
            value={workSite} 
            onChange={(e) => setWorkSite(e.target.value)} 
            required 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridOverview">
          <Form.Label>Overview</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Enter overview" 
            value={overview} 
            onChange={(e) => setOverview(e.target.value)} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridResponsibilities">
          <Form.Label>Responsibilities</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Enter responsibilities" 
            value={responsibilities} 
            onChange={(e) => setResponsibilities(e.target.value)} 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridQualifications">
          <Form.Label>Qualifications</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Enter qualifications" 
            value={qualifications} 
            onChange={(e) => setQualifications(e.target.value)} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridWorkType">
          <Form.Label>Work Type</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter work type" 
            value={workType} 
            onChange={(e) => setWorkType(e.target.value)} 
            required 
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridIsOpen">
        <Form.Check 
          type="checkbox" 
          label="Is Open" 
          checked={isOpen} 
          onChange={(e) => setIsOpen(e.target.checked)} 
        />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formGridPostedOn">
        <Form.Label>Posted On</Form.Label>
        <Form.Control 
          type="datetime-local" 
          value={new Date().toISOString().slice(0, 16)}
          onChange={(e) => setPostedOn(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JobPostForm;