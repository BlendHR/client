import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const JobView = () => {
    const [job, setJob] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/jobs/1') // Replace with your DRF API endpoint
            .then(response => {
                setJob(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{job.job_title}</Card.Title>
                <Card.Text>
                    {job.overview}
                </Card.Text>
                <Card.Text>
                    Posted on: {new Date(job.posted_on).toLocaleDateString()}
                </Card.Text>
                <Card.Text>
                    Work site: {job.work_site}
                </Card.Text>
                <Card.Text>
                    Work type: {job.work_type}
                </Card.Text>
                <Button variant="primary">Apply</Button>
            </Card.Body>
        </Card>
    );
};

export default JobView;