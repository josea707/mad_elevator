import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className='center center-text'>
      <h1> 404</h1>
      <h2> Page Not Found</h2>
      <p>
        {' '}
        The page you're looking for doesn't exist or another error occured. Go
        to
        <Link to='/'> Home Page</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
