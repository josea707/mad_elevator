import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import UserImage from '../images/avatar.png';
import isBirthday from '../utils/isBirthday';
const Home = () => {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div className='home-container'>
      {user == null ? (
        <Redirect to='/edit' />
      ) : (
        <Fragment>
          <div className='home-container__birthday center-text'>
            {isBirthday(user.birthday) && (
              <h1 className='red'> Today is your birthday!!</h1>
            )}
          </div>
          <div className='home-container__elements'>
            <div className='home-container__elements--image'>
              <img src={UserImage} alt='profile' />
            </div>
            <div className='home-container__elements--information'>
              <p> First Name: {user.firstName} </p>
              <p> Last Name: {user.lastName} </p>
              <p> Birthday: {user.birthday} </p>
              <p>
                {' '}
                Favourite Color:{' '}
                <span
                  style={{
                    backgroundColor: `${user.favouriteColour}`,
                    color: `${user.favouriteColour}`,
                  }}
                >
                  {' '}
                  {user.favouriteColour}
                </span>
              </p>
              <Link to='/edit'>
                <button
                  className='btn'
                  style={{ backgroundColor: `${user.favouriteColour}` }}
                >
                  {' '}
                  Edit Information
                </button>
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
