import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Form , Button, Card, Row, Col, Container, Spinner} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import instance from '../../axios';

function JobEditForm() {
    const [jobTitle, setJobTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [richOverview, setRichOverview] = useState('');
    const [workSite, setWorkSite] = useState('');
    const [workType, setWorkType] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [postedOn, setPostedOn] = useState('');
    const [success, setSuccess] = useState('');

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await instance.get(`/jobs/${id}`);
                const job = response.data;
                setJobTitle(job.job_title);
                setOverview(job.overview);
                setRichOverview(job.overview);
                setWorkSite(job.work_site);
                setWorkType(job.work_type);
                setIsOpen(job.is_open);
                setPostedOn(job.posted_on);
            }
            catch (error) {
                console.error('Failed to fetch job', error);
            }
        }
        fetchJob();
    }
    , [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await instance.put(`/jobs/${id}/`, {
                creater_id: 1,
                job_title: jobTitle,
                overview: overview,
                work_site: workSite,
                work_type: workType,
                is_open: isOpen,
                posted_on: postedOn
            });
            console.log(response.data);
            setSuccess('Updated successfully');
            navigate('/jobs');
        }
        catch (error) {
            console.error('Edit job error:', error);
        }
        finally {
            setIsLoading(false);
        }
    };


    return (
        <>
        <h1  style={{textAlign:'center'}}>Job Edit Form</h1>
        <section>
            <Form onSubmit={handleSubmit} style={{width:'80%', marginTop: '8rem'}} >
              <Form.Group controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter job title" 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  required 
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formGridWorkSite">
                <Form.Label>Work Site</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter work site" 
                  value={workSite} 
                  onChange={(e) => setWorkSite(e.target.value)} 
                  required 
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formGridOverview">
                <Form.Label>Overview</Form.Label>
                <ReactQuill 
                  placeholder="Enter overview" 
                  value={richOverview} 
                  onChange={(content, delta, source, editor) => {
                    setRichOverview(content);
                    setOverview(editor.getText().trim());
                  }} 
                  />
              </Form.Group>
              <br />
              <Form.Group controlId="formGridWorkType">
                <Form.Label>Work Type</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter work type" 
                  value={workType} 
                  onChange={(e) => setWorkType(e.target.value)} 
                  required 
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formGridIsOpen">
                <Form.Check 
                  type="checkbox" 
                  label="Is Open" 
                  checked={isOpen} 
                  onChange={(e) => setIsOpen(e.target.checked)} 
                />
              </Form.Group> 
              <br />
              <Form.Group controlId="formGridPostedOn">
                <Form.Label>Posted On</Form.Label>
                <Form.Control 
                  type="datetime-local" 
                  value={new Date().toISOString().slice(0, 16)}
                  onChange={(e) => setPostedOn(e.target.value)}
                  required
                />
              </Form.Group>
              <br />
              <Button style={{width:'150px'}} variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? <Spinner animation="border" size="sm" /> : (success ? success : 'Update')}
              </Button>
              <Button style={{width:'150px', marginLeft:'20px'}} variant="primary" onClick={() => navigate('/jobs')}>Add Stage</Button>
            </Form>
            
            </section>
            <section>
            </section>
        
        </>
      );
      }

export default JobEditForm;
