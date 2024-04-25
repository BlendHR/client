import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';    
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';
import {Navigate, useParams} from 'react-router-dom';
//use navigate
import { useNavigate } from 'react-router-dom';

<script type="text/javascript" src="https://apis.google.com/js/api.js"></script>



function RoundedInput({ type, name, placeholder, value, onChange }) {
  return (
    <Form.Group controlId={name}>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderRadius: '15px' }}
      />
    </Form.Group>
  );
}

function RoundedTextArea({ name, placeholder, value, onChange }) {
  return (
    <Form.Group controlId={name}>
      <Form.Label>What type of project you worked in the last organization:</Form.Label>
      <Form.Control
        as="textarea"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderRadius: '15px', height: '100px' }}
      />
    </Form.Group>
  );
}
function PersonalInfo({formData, handleChange}){

    
    return (
        
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '10px' }}>
            <h5 style={{ marginTop: '20px', textAlign:'left' }}>Personal Information</h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <RoundedInput type="text" name="firstName" placeholder="First Name" value={formData.firstname|| ''} onChange={handleChange} />
            <RoundedInput type="text" name="lastName" placeholder="Last Name" value={formData.lastname|| ''} onChange={handleChange} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <RoundedInput type="text" name="area" placeholder="Area" value={formData.area|| ''} onChange={handleChange} />
            <RoundedInput type="text" name="country" placeholder="Country" value={formData.country|| ''} onChange={handleChange} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <RoundedInput type="text" name="phone" placeholder="Phone" value={formData.phone|| ''} onChange={handleChange} />
            <RoundedInput type="text" name="email" placeholder="email" value={formData.email|| ''} onChange={handleChange} />
          </div>
        </div>
      );
    }
    
function Profile({formData, handleChange, handleFileChange}){
    
        return (
            <div>
                <h5 style={{ marginTop: '20px', textAlign:'left' }}>Profile</h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <RoundedInput type="text" name="linkedin" placeholder="LinkedIn" value={formData.linkedin || ''} onChange={handleChange} />
                  <RoundedInput type="file" name="resumefile" placeholder="Resume" value={formData.resumefile || ''} onChange={handleFileChange} />
                </div>
            </div>
        )
    
    }
function Experience({formData, handleChange}){

    
    return(
        <div>
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '10px' }}>
            <h5 style={{ marginTop: '20px', textAlign:'left' }}>Experience</h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <RoundedInput type="text" name="company" placeholder="Company" value={formData.company || ''} onChange={handleChange} />
                <RoundedInput type="text" name="position" placeholder="Position" value={formData.position || ''} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <RoundedInput type="text" name="lastSalary" placeholder="Last Salary" value={formData.lastSalary|| ''} onChange={handleChange} />
                <RoundedInput type="text" name="ExpectedSalary" placeholder="Expected Salary" value={formData.ExpectedSalary || ''} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <RoundedTextArea name="Orgdetail" placeholder="Organization Details" value={formData.Orgdetail || ''} onChange={handleChange} />
                <RoundedTextArea name="Skills" placeholder="Skills" value={formData.Skills || ''} onChange={handleChange} />
            </div>
        </div>
        </div>
    )

}

function SubmitButton({handleSubmit}) { 
    return (
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '15px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Submit
        </button>
      );

    }
function ApplyJob() {

    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        area: '',
        country: '',
        phone: '',
        email: '',
        linkedin: '',
        resumefile: null,
        company: '',
        position: '',
        lastSalary: '',
        expectedSalary: '',
        orgDetail: '',
        skills: '',
        // include other fields as necessary
      });

      const {jobId} = useParams();
      const id = jobId;
      const [job, setJob] = useState(null);

      useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/jobs/${id}`);
                setJob(response.data);
            } catch (error) {
                console.error('Failed to fetch job', error);
            }
        };
        fetchJob();
    }, [jobId]);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleFileChange = (e) => {
        setFormData({ ...formData, resumefile: e.target.files[0] });
      };


const handleSubmit = async (e) => {
    e.preventDefault();
    // create a new object that only includes the fields that are required by the API
    const candidateData = {
        user_id: '1',
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        phone: formData.phone,
        linkedin_url: formData.linkedin,
    };

    try {
        // Post data to the Candidate model
        const candidateResponse = await axios.post('http://127.0.0.1:8000/api/candidates/', candidateData);
        console.log(candidateResponse);

        // Get the ID of the new candidate
        const candidateId = candidateResponse.data.candidate_id;

        // Create a new object for the ProfileScore data
        const profileScoreData = {
            resume_score: 0,  // Replace with actual score
            relevance_score: 0,  // Replace with actual score
        };

        // Post data to the ProfileScore model
        const profileScoreResponse = await axios.post('http://127.0.0.1:8000/api/profile_scores/', profileScoreData);
        console.log(profileScoreResponse);

        // Get the ID of the new profile score
        const profileScoreId = profileScoreResponse.data.profile_score_id;

        // Create a new object for the CandidateApplication data
        const applicationData = {
            candidate_id: candidateId,
            job_id: id,  // Assuming `id` is the ID of the job
            profile_score_id: profileScoreId,
            resume_file: 'path/to/resume',  // Replace with actual path
        };

        // Post data to the CandidateApplication model
        const applicationResponse = await axios.post('http://127.0.0.1:8000/api/candidate_applications/', applicationData);
        console.log(applicationResponse);
        // User to be redirected to the job list page
        Navigate('/job-list');
    } catch (error){
        console.log(error)
    }
};
            
    if (!job) {
      return <div>Loading...</div>;
    }
    
    return (
        <div>
          <div style={{fontSize:'50px', fontFamily:'serif', fontStyle:'-moz-initial', color:'darkblue'}}>
            Job Application Form
            <h5>Apply for {job.job_title}</h5>
          </div>
        <PersonalInfo formData={formData} handleChange={handleChange} />
        <Profile formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />
        <Experience formData={formData} handleChange={handleChange} />
        <SubmitButton handleSubmit={handleSubmit} />
        </div>
        
    );
    }

export default ApplyJob;

