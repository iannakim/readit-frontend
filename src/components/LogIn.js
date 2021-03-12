import React from 'react'
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import '../App.css'

function LogIn() {

  const [login, setLogin] = useState([
    {
      email: '',
      password: ''
    }
  ])

  return(
    <div>
      <h3>Welcome back! Please Log in</h3>
        <div className="login-container">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember my log-in information" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
    </div>
  )
}

export default withRouter(LogIn)