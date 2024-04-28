import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import PdfViewer from '../../components/PdfViewer';
import ApplicantProfile from '../../components/ApplicantProfile';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function CandidateProfile(){

    const [candidate, setCandidate] = useState({});
    const { candidateId } = useParams();
    const pdfUrl = "https://animated-funicular-jp49gw99w95c5wj4-8000.app.github.dev/media/resumes/sample-resume.pdf"
    return (
        <div>
            <h1>Candidate Profile</h1>
            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
            >
                <Tab eventKey="CandidateDetails" title="Candidate Details">
                    <ApplicantProfile />    
                </Tab>
                <Tab eventKey="Resume" title="Resume">
                    <PdfViewer url={pdfUrl} />
                </Tab>
                <Tab eventKey="ContactDetails" title="Contact Details" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );

}
