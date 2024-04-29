import React, { useEffect, useState } from 'react';
import CandidateList from '../../components/CandidateList';
import './Candidates.css';
// import axios 
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { async_get_candidates } from '../../../api';
import { Spinner, Container } from 'react-bootstrap';





function JobFilter() {
  return (
    <Form.Select aria-label="job">
      <option>All Jobs</option>
      <option value="1">Frontend</option>
      <option value="2">Backend</option>
      <option value="3">Data Science</option>
    </Form.Select>
  );
}

function StatusFilter() {
  return (
    <Form.Select aria-label="status">
      <option>All Statuses</option>
      <option value="1">Interview phase</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const candidates = await async_get_candidates();
        setCandidates(candidates);
        setFetched(true);
      } catch (error) {
        console.error("Error in Candidates.jsx", error);
      }
    }

    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>All Candidates</h1>
        <JobFilter />
        <StatusFilter />
        <Container>
          {fetched? <CandidateList candidates={candidates} /> : <Spinner animation="border" />}
        </Container>
    </div>
  );
};

export default Candidates;