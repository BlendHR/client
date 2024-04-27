import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import instance from '../axios';
import "./JobCardList.css";
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import { async_get_candidates } from '../../api';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const candidates = await async_get_candidates();
        setCandidates(candidates);
        setFetched(true);
      } catch (error) {
        console.error("Error in CandidateList.jsx::fetchCandidates:", error);
      }
    }

    fetchCandidates();
  }, []);

  return (
    <Container> 

      {fetched ? null : <Spinner animation="border" />}
      <Row xs={1} md={3} className="g-4">
        {candidates.map((candidate) => (
          <Col key={candidate.candidate_id}>
            <Link to={`/candidates/${candidate.candidate_id}`}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>{candidate.candidate_id}</Card.Title>
                  <Card.Text>
                    {candidate.first_name} {candidate.last_name} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CandidateList;