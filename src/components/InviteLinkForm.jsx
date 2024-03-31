// InviteLinkForm.js
import React, { useState, useEffect } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';

import axios from 'axios';

const InviteLinkForm = () => {
  const [inviteLink, setInviteLink] = useState('');

  const generateInviteLink = async () => {
    try {
      // const response = await axios.post('/api/invite-links');
      // setInviteLink(response.data.link);
      // Better to pass the invite link instead of generating it again and again
      /////////////dummy data ///////////////////////
      const response = "http://localhost:3000/invite/123456";
      setInviteLink(response);
    } catch (error) {
      console.error('Error generating invite link:', error);
    }
  };

  useEffect(() => {
    generateInviteLink();
  }
  , []);

  return (
    <div>
      <Form.Group>
        <Form.Control type="text" value={inviteLink} readOnly />
        <Form.Text className="text-muted">
          Share this link with users to invite them to join the organization.
        </Form.Text>
      </Form.Group>
      <CopyToClipboard text={inviteLink} >
        <Button>Copy Invite Link</Button>
      </CopyToClipboard>
    </div>
  );
};

export default InviteLinkForm;
