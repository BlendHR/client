import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { Alert,Button } from 'react-bootstrap';
import instance from '../../axios';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
  



function CandidateProfile(){

    const navigate = useNavigate();

    const [candidate , setCandidate] = useState([]);
    const [job , setJob] = useState([]);
    const [application , setApplication] = useState([]);
    const [ProfileScore , setProfileScore] = useState([]);
    const { id } = useParams();
    console.log(id);

    
useEffect(() => {
  const fetchCandidate = async () => {
    try {
      const applicationDetail = await instance.get(`/candidate_detail/${id}`);
      setCandidate(applicationDetail.data);
      setApplication(applicationDetail.data.candidateapplication_set);
    } catch (error) {
      console.error('Failed to fetch candidate', error);
    }
  };

  fetchCandidate();
}, [id]);

useEffect(() => {

  const fetchJobDetails = async () => {
    if (!application || application.length === 0) {
      return;
    }

    const jobDetails = await Promise.all(application.map(async (app) => {
      try {
        const jobDetail = await instance.get(`/jobs/${app.job_id}`);
        return jobDetail.data;
      } catch (error) {
        console.error(`Failed to fetch job details for job ID ${app.job_id}`, error);
        return null; // Return null if this API call fails
      }
    }));

    setJob(jobDetails.filter(job => job !== null)); // Exclude any failed requests
  };

  fetchJobDetails();
}, [application]);

// useEffect(() => {
//     // fetch profile score
//     const fetchProfileScore = async () => {
//         try {
//             const response = await instance.get(`/profile_score/${id}`);
//             setProfileScore(response.data);
//         } catch (error) {
//             console.error('Failed to fetch profile score', error);
//         }
//     };

//     fetchProfileScore();
// }, [id]);

    console.log(candidate);
    console.log(job);
    console.log(application);

    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
        <div><h1>Candidate Profile</h1>

        
            <section style={{ backgroundColor: '#eee', width:'800px'}}>
              <MDBContainer className="py-5" style={{width:'800px'}}>
                {/* <MDBRow>
                  <MDBCol>
                    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                      <MDBBreadcrumbItem>
                        <a href='#'>Home</a>
                      </MDBBreadcrumbItem>
                      <MDBBreadcrumbItem>
                        <a href="#">User</a>
                      </MDBBreadcrumbItem>
                      <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                  </MDBCol>
                </MDBRow>
         */}
                <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4" >
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          alt="avatar"
                          className="rounded-circle"
                          style={{ width: '150px' }}
                          fluid />
                        <p className="text-muted mb-1">{candidate.candidate_id}</p>
                        <p className="text-muted mb-4">{candidate.country}</p>
                        {/* <div className="d-flex justify-content-center mb-2">
                          <MDBBtn>Follow</MDBBtn>
                          <MDBBtn outline className="ms-1">Message</MDBBtn>
                        </div> */}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                    <MDBCard className="mb-4" style={{width:'800px' , padding:'20px'}}>
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{candidate.first_name} {candidate.last_name}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{candidate.email}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Phone</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{candidate.phone}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>LinkedIn Profile</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{candidate.linkedin_url}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Applied For</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                          <MDBCardText className="text-muted">{job[0] && job[0].job_title}</MDBCardText>                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Applied On</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{application[0] && application[0].applied_on}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        {/* <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Profile Score</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">10</MDBCardText>
                          </MDBCol>
                        </MDBRow> */}
                        <hr />
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            <Button variant="primary" onClick={() => navigate('/candidates')}>Back</Button>
            </section>
            </div>
          );
}






export default CandidateProfile;