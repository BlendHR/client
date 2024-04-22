import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function EmailVerification() {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');

        if (code) {
            axios.get(`http://localhost:8000/api/accounts/signup/verify/?code=${code}`)
                .then(response => {
                    if (response.status === 200) {
                        setVerified(true);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    }, [location, navigate]);

    return (
        <div>
            {verified ? (
                <>
                    <h1>Email verified!</h1>
                    <p>You can now login to your account.</p>
                    <button onClick={() => navigate('/login')}>Login</button>
                </>
            ) : (
                <h1>Verifying email...</h1>
            )}
        </div>
    );
}

export default EmailVerification;