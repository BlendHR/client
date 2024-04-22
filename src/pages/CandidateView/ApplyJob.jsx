import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';    
import axios from 'axios';

function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
// make a simple application form for the candidate to apply for a job

function Header() {
  return (
    <div>
      <h1>Apply for a Job</h1>

    </div>
  );
}


function RoundedInput({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ borderRadius: '15px', padding: '10px 10px', backgroundColor: 'light grey', border: 'true', margin: '5px 0' }}
    />
  );
}

function RoundedTextArea({ name, placeholder, value, onChange }) {
    return (
      <div>
        <label htmlFor={name}>What type of project you worked in the last organization:</label>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ borderRadius: '15px', padding: '10px', backgroundColor: 'lightgrey', border: 'true', margin: '5px 0', width: '100%', height: '100px' }}
        />
      </div>
    );
  }

function PersonalInfo({formData, handleChange}){

    
    return (
        
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '10px' }}>
            <h2 style={{ marginTop: '20px' }}>Personal Information</h2>
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
                <h2 style = {{marginTop: '20px'}}>Profile</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <RoundedInput type="text" name="linkedin" placeholder="LinkedIn" value={formData.linkedin || ''} onChange={handleChange} />
                    <RoundedInput type="file" name="resumefile" placeholder="Resume" value={formData.resumefile || ''} onChange={handleFileChange} />
                </div>
            </div>
        )
    
    }
function Experience({formData, handleChange}){

    
    return(
        <div>
            <h2>Experience</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <RoundedInput type="text" name="company" placeholder="Company" value={formData.company || ''} onChange={handleChange} />
                <RoundedInput type="text" name="position" placeholder="Position" value={formData.position || ''} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <RoundedInput type="text" name="lastSalary" placeholder="Last Salary" value={formData.lastSalary|| ''} onChange={handleChange} />
                <RoundedInput type="text" name="ExpectedSalary" placeholder="Expected Salary" value={formData.ExpectedSalary || ''} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <RoundedTextArea name="Orgdetail" placeholder="Organization Details" value={formData.Orgdetail || ''} onChange={handleChange} />
                <RoundedTextArea name="Skills" placeholder="Skills" value={formData.Skills || ''} onChange={handleChange} />
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
                const dataToSend = {
                    user_id: '1',
                    email: formData.email,
                    country: formData.country,
                    phone: formData.phone,
                    linkedin_url: formData.linkedin,
                };

                try {
                    const response = await axios.post('http://127.0.0.1:8000/candidates/', dataToSend);
                    console.log(response);
                  
                } catch (error){
                    console.log(error)
                }
            };
            

    
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>Apply for a Job</h1>
        
        <PersonalInfo formData={formData} handleChange={handleChange} />
        <Profile formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />
        <Experience formData={formData} handleChange={handleChange} />
        <SubmitButton handleSubmit={handleSubmit} />
        </div>
        
    );
    }




export default ApplyJob;

