import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { Card, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';

function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await instance.get('/candidate_applications/');
        setCandidates(response.data);
      } catch (error) {
        console.error('Failed to fetch candidates', error);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await instance.get('/jobs/');
        setJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      }
    };

    fetchCandidates();
    fetchJobs();
  }, []);

  const stages = ['Applied', 'Phone Screen', 'Interview', 'Offer', 'Hired'];
  const stageData = stages.map(stage => ({
    name: stage,
    candidates: candidates.filter(candidate => candidate.stage === stage).length,
  }));

  const data = jobs.map(job => ({
    name: job.job_title,
    applicants: candidates.filter(candidate => candidate.job_id === job.job_id).length,
  }));

  return (
    <div>
      <h1>Dashboard</h1>

      <Row>
        <Col >
          <Card>
            <Card.Body>
              <Card.Title>Total Candidates Applied</Card.Title>
              <Card.Text>{candidates.length}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Jobs Posted</Card.Title>
              <Card.Text>{jobs.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2>Applicants per Job</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="applicants" fill="#8884d8" />
      </BarChart>

      <h2>Candidates per Stage</h2>
      <LineChart width={500} height={300} data={stageData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="candidates" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Dashboard;