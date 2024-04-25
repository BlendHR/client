import React, { useEffect } from 'react';
import CandidateList from '../../components/CandidateList';
import './Candidates.css';
// import axios 
import axios from 'axios';
import Form from 'react-bootstrap/Form';





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
  const candidate = {/* Fetch or define candidate data here */};

  return (
    <div>
      <h1>All Candidates</h1>
        <JobFilter />
        <StatusFilter />
      <CandidateList candidate={candidate} />
    </div>
  );
};

export default Candidates;