import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import { async_verify_email } from '../../../api';


function EmailVerification() {
    const navigate = useNavigate();
    const location = useLocation();
    const [alert_variant, setAlertVariant] = useState('success');
    const [alert_message, setAlertMessage] = useState('Verifying email...');

    const handle = async () => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        const response = await async_verify_email(code);
        if (response) {
            if (response.status === 200) {
                setAlertVariant('success');
                setAlertMessage('Email verified');
                // wait for 2 seconds before redirecting to login
                navigate('/login')
            }else{
                setAlertVariant('danger');
                setAlertMessage('Email verification failed');
            }
        }else{
            setAlertVariant('danger');
            setAlertMessage('Email verification failed');
        }
    }
    handle();
    return (
        <div>
            <Alert variant={alert_variant}>{alert_message}</Alert>
        </div>
    );
}

export default EmailVerification;