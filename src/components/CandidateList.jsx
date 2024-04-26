import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./JobCardList.css";

function CandidateList() {
  const [candidate, setCandidate] = useState([]);
  const [job, setJob] = useState([]);
  const [application, setApplication] = useState([]);
  const [profileScore, setProfileScore] = useState([]);


//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/candidates');
//         setCandidates(response.data);
//       } catch (error) {
//         console.error('Failed to fetch candidates', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

// }
  // using candidates data fetch other jobs data using candidate_id

const fetchApplicationDetails = async (applicationId) => {
    try {
        const applicationResponse = await axios.get(`http://127.0.0.1:8000/api/candidate_applications_detail/${applicationId}/`);
        const application = applicationResponse.data;

        const candidateResponse = await axios.get(`http://127.0.0.1:8000/api/candidates/${application.candidate_id}/`);
        const candidate = candidateResponse.data;

        const jobResponse = await axios.get(`http://127.0.0.1:8000/api/jobs/${application.job_id}/`);
        const job = jobResponse.data;

        const profileScoreResponse = await axios.get(`http://127.0.0.1:8000/api/profile_score/${application.profile_score_id}/`);
        const profileScore = profileScoreResponse.data;

        console.log({
            application,
            candidate,
            job,
            profileScore,
        });
        setApplication(application);
        setCandidate(candidate);
        setJob(job);
        setProfileScore(profileScore);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    fetchApplicationDetails(1);
}, []);

return (
  <Row xs={1} md={3} className="g-4">
    {candidate && (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{candidate.candidate_id}</Card.Title>
          <Card.Text>
            {candidate.first_name} {candidate.last_name} <br />
          </Card.Text>
          <Card.Text>
            Applied for: {job.job_title}<br />
            Applied on: {application.applied_on}<br />
          </Card.Text>
          <Card.Text>
            Profile Score: {profileScore.relevance_score}<br />
          </Card.Text>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    )}
  </Row>
);
}

export default CandidateList;