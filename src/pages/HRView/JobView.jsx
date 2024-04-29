import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../axios';


const JobView = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({});
  const [jobScreens, setJobScreens] = useState([]);
  const [candidateApplication, setCandidateApplication] = useState([]);
  const [candidates, setCandidates] = useState([]);


useEffect(() => {
  const fetchCandidates = async () => {
    try {
      const response = await instance.get(`/job_details/${id}`);
      setJobData(response.data);
      setJobScreens(response.data.job_screens);
      setCandidateApplication(response.data.candidate_applications);
    }
    catch (error) {
      console.error('Failed to fetch job', error);
    }
  }
  fetchCandidates();
}, [id]);

useEffect(() => {
  const fetchAllCandidates = async () => {
    try {
      const candidates = await Promise.all(candidateApplication.map(async (application) => {
        const response = await instance.get(`/candidate_applications_detail/${application.candidate_id}`);
        const candidateData = response.data;
        
        // Determine the stage of the candidate
        const passedScreens = candidateData.job_screen_relations.filter(relation => relation.is_screen_passed).length;
        candidateData.stage = passedScreens === candidateData.job_screen_relations.length ? 'Final' : `Screen ${passedScreens + 1}`;

        return candidateData;
      }));
      setCandidates(candidates);
    }
    catch (error) {
      console.error('Failed to fetch candidates', error);
    }
  }
  fetchAllCandidates();
}, [candidateApplication]);

const [selectedStage, setSelectedStage] = useState('All');

  // ...

  const handleStageChange = (stage) => {
    setSelectedStage(stage);
  };

  const filteredCandidates = candidates.filter(candidate => {
    if (selectedStage === 'All') {
      return true;
    }
    return candidate.stage === selectedStage;
  });

  console.log(jobData);
  console.log(jobScreens);
  console.log(candidateApplication);
  console.log(candidates);

    return (

      <div>
        
      <h1 style={{marginTop:'1em', fontSize:'250%'}}>{jobData.job_title}</h1>
      <h5>Number of Stages: {jobScreens.length}</h5>
      <h5>Work Site: {jobData.work_site}</h5>
      <h5>Number of Applications:{candidateApplication.length}</h5>
      <Dropdown onSelect={handleStageChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedStage}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Screen 1">Screen 1</Dropdown.Item>
          <Dropdown.Item eventKey="Screen 2">Screen 2</Dropdown.Item>
          <Dropdown.Item eventKey="Final">Final</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <Col className="d-flex justify-content-end">
    <Button variant="primary" onClick={() => navigate(`/edit-job/${id}`)} style={{width: '20%'}}>Edit Job</Button>
  </Col>
        <h3>Candidates</h3>
        <br/>
        <br/>
        <Container>
          <Row>
            {filteredCandidates.map((candidate) => (
              <Col key={candidate.id} md={20}>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                  <Card.Body>
                    <Card.Title>{candidate.first_name} {candidate.last_name}</Card.Title>

                    <Card.Text>
                      Applied On: {new Date(candidateApplication.find(app => app.candidate_id === candidate.candidate_id).applied_on).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text>
                    Stage: {candidate.stage}
                    </Card.Text>
                    <Card.Text>
                      <Button variant="primary" onClick={() => navigate(`/candidates/${candidate.candidate_id}`)} style={{width:'45%'}}>View Profile</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
            </Container>
      </div>
    );
  }

export default JobView
  

