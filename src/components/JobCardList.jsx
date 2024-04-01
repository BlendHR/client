import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';

import "./JobCardList.css";

import react_svg from '../assets/react.svg';

function GroupExample() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs data from the server when the component mounts
    axios.get('/api/jobs')
      .then(response => {
        // setJobs(response.data);
        setJobs([
          {
            id: 1,
            title: 'Job 1',
            description: 'Job description 1',
            image: {react_svg},
          },
          {
            id: 2,
            title: 'Job 2',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vel quisquam quae, a quis, laudantium maxime eum, perferendis",
            image: {react_svg},
          },
          {
            id: 3,
            title: 'Job 3',
            description: 'Job description 3',
            image: {react_svg},
          },
        ]);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <CardGroup>
      {jobs.map(job => (
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
