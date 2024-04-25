import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Card key={job.job_id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{job.job_title}</Card.Title>
            <Card.Text>
              {job.overview}
            </Card.Text>
            <Card.Text>
              Posted on: {new Date(job.posted_on).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              Work site: {job.work_site}
            </Card.Text>
            <Card.Text>
              Work type: {job.work_type}
            </Card.Text>
            {/* <Link to={`/apply-job/${job.job_id}`}>
              <Button variant="primary">Apply</Button>
            </Link> */}
            {
              //link to post job
             
            }
          </Card.Body>
          
        </Card>
      ))}
    </div>
    </div>
  );
}

export default JobList;