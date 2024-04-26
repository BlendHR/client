import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateJob() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title : '',
        overview : '',
        qualifications : '',
        location : '',
        work_site : '',
        salary : '',
        employmentType : '',
        discipline : '',
        work_type : '',
        posted_on : '',
        is_open : true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('/api/create-job', formData);
    //         navigate('/job-list');
    //     } catch (error) {
    //         console.error('Create job error:', error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/jobs/', formData);
            navigate('/job-list');
        } catch (error) {
            console.error('Create job error:', error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Overview</Form.Label>
                <Form.Control
                    type="text"
                    name="Overview"
                    value={formData.overview}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="qualifications">
                <Form.Label>Qualifications</Form.Label>
                <Form.Control
                    type="text"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="work_site">
                <Form.Label>Work Site</Form.Label>
                <Form.Control
                    type="text"
                    name="work_site"
                    value={formData.work_site}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="salary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            
            
        </Form>
    );

}

export default CreateJob;