import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { string } from 'yup';

const JobView = () => {
    const [job, setJob] = useState(null);
    const { jobId } = useParams();
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/jobs/${jobId}/`);
                setJob(response.data);
            } catch (error) {
                console.error('Failed to fetch job', error);
            }
        };

        fetchJob();
    }, [jobId]);

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
                <Button link={`/apply-job/${job.job_id}`} variant="primary">Apply</Button>
            </Card.Body>
        </Card>
    );
};

export default JobView;