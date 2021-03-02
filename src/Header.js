import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import logo from './images/logo.svg';
import './App.css'

class Header extends React.Component {

  handleClick = () => {
    this.props.history.push("/home")
  }

  render() {
   
    return (
     <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/"><img className="logo" src={logo} alt="home"/> READ.IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/logs">My Reading Logs</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/saved">Saved articles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
      </Navbar>

     </div>
    )
  }
}



export default withRouter(Header)