
import React, { useEffect, useState } from 'react';
// import instance from '../../axios';
import Spinner from 'react-bootstrap/Spinner';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
  



export default function ApplicantProfile({id}){

    const [data , setData] = useState(null);
    const [fetched, setFetched] = useState(false);
    
    // useEffect(() => {
    //   const fetchCandidate = async () => {
    //     try {
    //       const applicationDetail = await instance.get(`/candidate_detail/${id}`);
    //       setCandidate(applicationDetail.data);
    //       setApplication(applicationDetail.data.candidateapplication_set);
    //     } catch (error) {
    //       console.error('Failed to fetch candidate', error);
    //     }
    //   };

    //   fetchCandidate();
    // }, [id]);

    // useEffect(() => {

    //   const fetchJobDetails = async () => {
    //     if (!application || application.length === 0) {
    //       return;
    //     }

    //     const jobDetails = await Promise.all(application.map(async (app) => {
    //       try {
    //         const jobDetail = await instance.get(`/jobs/${app.job_id}`);
    //         return jobDetail.data;
    //       } catch (error) {
    //         console.error(`Failed to fetch job details for job ID ${app.job_id}`, error);
    //         return null; // Return null if this API call fails
    //       }
    //     }));

    //     setJob(jobDetails.filter(job => job !== null)); // Exclude any failed requests
    //   };

    //   fetchJobDetails();
    // }, [application]);

    useEffect(() => {
        // Fetch candidate data
        const dummyCandidateData = {
            candidate_id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            linkedin_url: 'https://www.linkedin.com/in/johndoe',
            country: 'USA',
            job_title: 'Software Engineer',
            applied_on: '2022-04-28'
        };
        setData(dummyCandidateData);
        setFetched(true);
        console.log(data);
    }, []);

    if (!fetched) {
        return <Spinner animation="border" />;
    }
    return (
        <div>
              <MDBContainer className="py-5" style={{width:'800px'}}>
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
                        <p className="text-muted mb-1">{data.candidate_id}</p>
                        <p className="text-muted mb-4">{data.country}</p>
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
                            <MDBCardText className="text-muted">{data.first_name} {data.last_name}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{data.email}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Phone</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{data.phone}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>LinkedIn Profile</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{data.linkedin_url}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Applied For</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                          <MDBCardText className="text-muted">{data.job_title}</MDBCardText>                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="6">
                            <MDBCardText>Applied On</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{data.applied_on}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
        </div>
           
          );
}