import React from 'react'
import './NavDemo.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import '../Assets';


export const NavDemo = () => {
  return (
    
<>

    <Navbar expand="lg"  className="nav">
         
        <Navbar.Brand className='index' href="/"> 
        <img className='logo' src="starbuks01.png" alt="Logo" fetchpriority="high" class="logo"></img>MoonBucks
        </Navbar.Brand>
        <Navbar.Brand className='index' href="/"> 
        Home
        </Navbar.Brand>
        <Navbar.Brand className='index' href="/login"> 
        Order
        </Navbar.Brand>
        <Navbar.Brand className='index' href="#home"> 
        About
        </Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='index'  to="/login">Login</Link>
            <Link className='index' to="/register">Register</Link>
            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    

    </>

  );
}

export default NavDemo;
