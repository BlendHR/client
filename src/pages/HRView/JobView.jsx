import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Dropdown, Row, Spinner, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../axios';
import CandidateList from '../../components/CandidateList';
import { async_get_jobs_info, async_get_candidates } from '../../../api';

const JobView = () => {
    const { jobId } = useParams();
    const [candidates, setCandidates] = useState([]);
    const [jobInfo, setJobInfo] = useState({});
    const [fetched, setFetched] = useState(false);
    const navigate = useNavigate();
    const preprocessRichText = (richText) => {
        return richText.replace(/\n/g, '<br>');
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobInfo = await async_get_jobs_info(jobId);   
                const candidates = await async_get_candidates(jobId);
                setJobInfo(jobInfo);
                setCandidates(candidates);
                setFetched(true);
            } catch (error) {
                console.error("Error in JobView:", error);
            }
        }
        fetchData();
    }, [jobId]);

    return (
        // # add margin between content
        <Container>
            {!fetched ? (
                <Spinner animation="border" />
            ) : (
                <>  

                    <h1>{jobInfo.job_title}</h1>
                    <Container>
                        {jobInfo.tags.split(',').map(tag => <Badge variant="secondary" className="mx-1">{tag.trim()}</Badge>)}    
                        <Row>
                            <Col>
                                Work Site: {jobInfo.work_site}
                            </Col>
                            <Col>
                                Work Type: {jobInfo.work_type}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Posted on: {new Date(jobInfo.posted_on).toLocaleDateString()}
                            </Col>
                            <Col>
                                Number of Applications: {candidates.length}
                            </Col>
                        </Row>
                        <Row className="left-justify">
                            <Col dangerouslySetInnerHTML={{ __html: preprocessRichText(jobInfo.job_description) }} />
                        </Row>
                    </Container>
                    <Button 
                        className="my-btn" 
                        variant="primary" 
                        onClick={() => navigate(`/edit-job/${jobInfo.job_id}`)}
                    >
                        Edit Job
                    </Button>
                <Row>
                        <Col>
                            <CandidateList candidates={candidates} />
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default JobView;
