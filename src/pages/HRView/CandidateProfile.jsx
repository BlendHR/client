import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import instance from '../../axios';




function CandidateProfile(){

    const [candidate , setCandidate] = useState([]);
    const { id } = useParams();

    
    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const applicationDetail = await instance.get(`/candidates_detail/${id}`);
                const JobId = applicationDetail.data.job_id;
                
                setCandidate(applicationDetail.data);
                console.log(applicationDetail.data);
            } catch (error) {
                console.error('Failed to fetch candidate', error);
            }
        };

        fetchCandidate();
    }, [id]);

    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{candidate.first_name} {candidate.last_name}</h1>
          
        </div>
    );

}






export default CandidateProfile;