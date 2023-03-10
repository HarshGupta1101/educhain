import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const inputChanged1 = (event) => {
    setCredentials({ ...credentials, username: event.target.value });
  };

  const inputChanged2 = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };

  return (
    <div className='login square border rounded-4 shadow-lg p-5 mb-5 bg-white rounded'>
      <p className='text-center fw-bold'>Sign In</p>
      <hr />
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='text'
            name='username'
            placeholder='Enter User Name'
            value={credentials.username}
            onChange={inputChanged1}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Enter Password'
            value={credentials.password}
            onChange={inputChanged2}
          />
        </Form.Group>

        <Form.Text
          className='text '
          style={{ textAlign: 'center', fontSize: '15px' }}
        >
          <p>
            Not Have An Account? <Link to='/register'>Sign Up</Link> Now!
          </p>
        </Form.Text>

        <div className='text-center'>
          <Button
            variant='warning'
            style={{ fontSize: '15px', fontWeight: 'bold' }}
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
