import React from 'react'
import './LoginSignup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDemo from './NavDemo';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';

export const Reg = () =>{
const navi = useNavigate()
const changelogin = () => {
    navi("/login")}

    const na = useNavigate()
    const change = () => {
        na("/")}    

  return (
    <>   
 <div> <NavDemo/></div>
   
   <div>
    <Form className='container'>
        <div className='text'>Register Now</div>
      <Form.Group className="emale" controlId="formBasicEmail">
      <Form.Label className='textuser'>User name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label  className='textuser'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Label  className='textuser'>Mobile No</Form.Label>
        <Form.Control type="email" placeholder="Enter Mobile" />
     
      

      <Form.Group className="password" controlId="formBasicPassword">
        <Form.Label  className='textuser'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="checkbox" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='buttonlogin'><Button className='button1' type="submit" onClick={changelogin}>
        Log in
      </Button>
      <Button className='button2' type="submit" onClick={change}>
        Signup
      </Button></div>
      
    </Form>
    </div>
    <div><Footer></Footer></div>
    </>
  );
}

export default Reg;
