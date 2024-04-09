import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import react_svg from '../assets/react.svg';
import "./JobCardList.css";

function CandidateList() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top"  />
            <Card.Body>
              <Card.Title>Candidate Name</Card.Title>
              <Card.Text>
                Applied for: Job Title <br/>
                Applied on: Date <br/>
                Status: Interview phase
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CandidateList;