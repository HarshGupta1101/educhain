import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: '', email: '', check: false, accesscode: ''
    })

  const inputChanged1 = event => {
    setCredentials({...credentials, fullname: event.target.value});
  }

  const inputChanged2 = event => {
    setCredentials({...credentials, email: event.target.value});
  }

  const inputChanged3 = () => {
    if(!credentials.check){
      setCredentials({...credentials, check: true});
    }else{
      setCredentials({...credentials, check: false});
    }
  }

  const inputChanged4 = event => {
    setCredentials({...credentials, accesscode: event.target.value});
  }
  

  return (
    <div className="signup square border rounded-4 shadow-lg p-5 mb-5 bg-white rounded">
      <p className="text-center fw-bold fs-4">Sign Up</p>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="fullname" placeholder="Enter Full Name" 
          value={credentials.fullname} onChange={inputChanged1} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter Email ID" 
          value={credentials.email} onChange={inputChanged2} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Do You Belong To An NGO ?" name="check" value={credentials.check} onChange={inputChanged3} />
        </Form.Group>
        {
          credentials.check && (
            <Form.Group className="mb-3" controlId="formBasicAccessCode">
              <Form.Label>Access Code</Form.Label>
              <Form.Control type="text" name="accesscode" placeholder="Enter Access Code Provided By Your NGO" 
              value={credentials.accesscode} onChange={inputChanged4} />
            </Form.Group>
          )
        }
        

        <Form.Text className="text " style={{textAlign: 'center', fontSize: '15px'}}>
          <p>Already Have An Account? <Link to="/login">Login</Link> Now!</p> 
        </Form.Text>

        <div className="text-center">
        <Button variant="warning" style={{fontSize: '15px', fontWeight: 'bold'}}>
          Register
        </Button>
        </div>

      </Form>
    </div>
  );
};

export default Register;