import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./JobCardList.css";
import {Container} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CandidateList({ candidates }) {
  const navigate = useNavigate();
  return (
    <div>
      <br>
      </br>
        <Container>
          <Row>
            {candidates.map((candidate) => (
              <Col key={candidate.candidate_id} md={20}>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                  <Card.Body>
                    <Card.Title>{candidate.first_name} {candidate.last_name}</Card.Title>

                    <Card.Text>
                      {/* Applied On: {new Date(candidateApplication.find(app => app.candidate_id === candidate.candidate_id).applied_on).toLocaleDateString()} */}
                    </Card.Text>
                    <Card.Text>
                      Resume Relevance Score: <b>{candidate.resume_score}</b>
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

export default CandidateList;