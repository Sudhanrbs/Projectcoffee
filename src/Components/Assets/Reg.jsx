import React, { useState } from 'react'
import './LoginSignup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDemo from './NavDemo';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import axios from 'axios';

export const Reg = () =>{
  const [roleid]=useState(1);

  const[reguser, updateRegUser] = useState({
    username : '',
    email : '',
    mobile : '',
    password : ''
    
})

   const inputchange = (e)=>{
    const {username, value} = e.target;
    updateRegUser({  [username] : value});
    }

    
    const addandsubmit  =async ()=>{
        
      await axios.post(`http://localhost:8383/user/adduser${roleid}`,reguser)
    }

const navi = useNavigate()
const changelogin = () => {
    navi("/login")}

//     const na = useNavigate()
//     const change = () => {
//         na("/table")}   
        
   
  return (
    <>   
 <div> <NavDemo/></div>
   
   <div>
    <Form   >
      <div className='container'>
        <div className='text'>Register Now</div>
      <Form.Group   >
      <Form.Label className='textuser'>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" value={reguser.username} onChange={inputchange} />
        
        <Form.Label  className='textuser' controlId="formBasicEmail">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={reguser.email} onChange={inputchange}  />
       
     

      <Form.Label  className='textuser' >Mobile No</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile"  value={reguser.mobile} onChange={inputchange}  />
     
      

        <Form.Label  className='textuser'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={reguser.password} onChange={inputchange} />
    
      <div className='buttonlogin'>
        <Button className='button1' type="submit"   >
        Log in
      </Button>
      <Button className='button2' type="submit" onChange={addandsubmit} >
         Sign up
      </Button>
      
      </div>
      </Form.Group>
      </div>
    </Form>
      
    </div>
    <div><Footer></Footer></div>
    </>
  );
}

export default Reg;
