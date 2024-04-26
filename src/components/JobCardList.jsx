import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';

import "./JobCardList.css";

import react_svg from '../assets/react.svg';

function GroupExample() {
  const [job, setJobs] = useState([]);

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
  }, [job]);

  return (
    <CardGroup>
      {job.map(job => (
        <Card key={job.id}>
          <Link to={`/jobs/${job.id}`}>
            <Card.Img className="card-img" variant="top" src={react_svg} />
          </Link>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Text>{job.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Created By</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}

export default GroupExample;
