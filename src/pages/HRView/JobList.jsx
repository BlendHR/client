import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job List</h1>
      <Link to={`/post-job/`}>
         <Button variant="primary">Post Job</Button>
       </Link>
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {jobs.map((job) => (
        <Col key={job.job_id}>
          <Link to={`/edit-job/${job.job_id}`}>
        <Card key={job.job_id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{job.job_title}</Card.Title>
            <Card.Text>
              Posted on: {new Date(job.posted_on).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              Work site: {job.work_site}
            </Card.Text>
            <Card.Text>
              Work type: {job.work_type}
            </Card.Text>
            <Link to={`/job-view/${job.job_id}`}>
              <Button variant="primary">View Job</Button>
            </Link>
          </Card.Body>
          
        </Card>
        </Link>
        </Col>
      ))}
    </div>
    </div>
  );
}

export default JobList;