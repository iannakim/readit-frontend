import React, { Component } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import logo from './images/logo.svg';


class Header extends React.Component {

  handleClick = () => {
    this.props.history.push("/home")
  }

  render() {
   
    return (
     <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/"><img className="logo" src={logo} alt="home"/> READ.IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#articles">View Latest Articles</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#activities">View My Work</NavDropdown.Item>
                <NavDropdown.Item href="#saved">Saved Articles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#account">View/Edit My Account</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Navbar>

     </div>
    )
  }
}



export default withRouter(Header)