import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import JobCardList from '../../components/JobCardList';

function Jobs() {
  return (
    <>
      <h1 className="left-justify">All Jobs</h1>
      <div className='right-justify'>
        <Link to="/post-job">
          <Button className="my-btn" variant="primary">Post a Job</Button>
        </Link>
      </div>
      <JobCardList />
    </>
  );
}

export default Jobs;
