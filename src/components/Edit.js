import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
const Edit = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    birthday: '',
    favouriteColour: '#ffffff',
  };
  const [user, setUser] = useState({
    ...initialState,
  });
  const [alert, setAlert] = useState({
    msg: '',
    isActive: false,
  });
  const [undoUpdate, setUndoUpdate] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let localStorageUser = localStorage.getItem('userInfo');
    if (localStorageUser) {
      localStorageUser = JSON.parse(localStorageUser);
      setUser(localStorageUser);
    } else localStorage.setItem('userInfo', JSON.stringify(initialState));
    setLoading(false);
    // eslint-disable-next-line
  }, []);
  const { firstName, lastName, birthday, favouriteColour } = user;
  const { msg, isActive } = alert;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const saveUserInfo = (e) => {
    e.preventDefault();
    setUndoUpdate(JSON.parse(localStorage.getItem('userInfo')));
    localStorage.setItem('userInfo', JSON.stringify(user));
    setAlert({
      msg: 'Your profile has been updated successfully',
      isActive: true,
    });
  };
  const restorePreviousUser = () => {
    localStorage.setItem('userInfo', JSON.stringify(undoUpdate));
    setUser(undoUpdate);
    setUndoUpdate({});
    setAlert({
      msg: 'Your profile has been restored successfully',
      isActive: true,
    });
  };
  return (
    <Fragment>
      <div className='form-container'>
        <div className='home-arrow'>
          <Link to='/'>
            <p className='red'>&#8592;</p>
          </Link>
        </div>
        {!loading && (
          <Fragment>
            <form onSubmit={saveUserInfo} className='center'>
              <h1 className='center-text'> Edit Profile</h1>
              <div className='form-container__element'>
                <label htmlFor='firstName' className='font-form'>
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={onChange}
                />
              </div>
              <div className='form-container__element'>
                <label htmlFor='lastName' className='font-form'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={onChange}
                />
              </div>
              <div className='form-container__element'>
                <label htmlFor='birthday' className='font-form'>
                  Birthday
                </label>
                <input
                  type='date'
                  name='birthday'
                  value={birthday}
                  onChange={onChange}
                />
              </div>
              <div className='form-container__element'>
                <label htmlFor='favouriteColour' className='font-form'>
                  Favourite Colour
                </label>
                <input
                  type='color'
                  name='favouriteColour'
                  value={favouriteColour}
                  onChange={onChange}
                />
              </div>
              {isActive && (
                <div className='form-container__element green'>{msg} </div>
              )}
              <div className='form-container__element'>
                <div className='form-container__element--button'>
                  <input
                    type='submit'
                    value='Save'
                    className='btn'
                    style={{
                      backgroundColor: `${
                        JSON.parse(localStorage.getItem('userInfo'))
                          .favouriteColour
                      }`,
                    }}
                  />
                </div>
              </div>
            </form>
            <div className='restore-button center'>
              <button
                onClick={restorePreviousUser}
                disabled={Object.keys(undoUpdate).length === 0}
                className='btn'
                style={{
                  backgroundColor: `${
                    JSON.parse(localStorage.getItem('userInfo')).favouriteColour
                  }`,
                }}
              >
                {' '}
                Restore Update{' '}
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Edit;
