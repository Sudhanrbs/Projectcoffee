import React from 'react'
import './LoginSignup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDemo from './NavDemo';
import Reg from './Reg';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';





export const LoginSignup = () => {
    const na = useNavigate()
    const changeReg = () => {
        na("/register")}

    
  return (
    <>   <div className='body'>
    <div ><NavDemo></NavDemo></div>
    

   
   <div>
    <Form className='container'>
        <div className='text'>Login</div>
      <Form.Group className="emale" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="checkbox" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='buttonlogin'>
        <Button className='button1' type="submit" >
        Log in
      </Button>
      <Button  className='button2' type="submit" onClick={changeReg}>
        Register Now
      </Button></div>
      
    </Form>

    </div>
    </div>
    <div><Footer></Footer></div>
    </>
  );
}

export default LoginSignup;
