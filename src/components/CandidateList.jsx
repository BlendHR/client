import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import instance from '../axios';
import "./JobCardList.css";
import { Link } from 'react-router-dom';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [Applicants, setApplicants] = useState([]);
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await instance.get('/candidate_applications/');
        setApplicants(response.data);
      } catch (error) {
        console.error('Failed to fetch candidates', error);
      }
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    const ids = Applicants.map(application => application.candidate_id);
    const fetchCandidate = async () => {
      try {
        const response = await Promise.all(ids.map(id => instance.get(`/candidates/${id}`)));
        setCandidates(response.map(res => res.data));
      } catch (error) {
        console.error('Failed to fetch candidates', error);
      }
    
    };
    fetchCandidate();

  }
  , [Applicants]);

  console.log(candidates);
  console.log(Applicants);




  return (
    <Row xs={1} md={3} className="g-4">
      {Applicants.map((application) => {
        const candidate = candidates.find(candidate => candidate.candidate_id === application.candidate_id);
        return (
          <Col key={application.candidate_id}>
            <Link to={`/candidates/${application.candidate_id}`}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>{application.candidate_id}</Card.Title>
                  <Card.Text>
                    {candidate && candidate.first_name} {candidate && candidate.last_name} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
export default CandidateList;