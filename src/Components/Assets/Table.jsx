import React, { useEffect, useState } from 'react'
import NavDemo from './NavDemo'
import axios from 'axios'

export default function Table() {
    const  [users,setUser]= useState([]);

   useEffect(()=>{
    loadusers();
   },[]);

   const loadusers=async()=>{
    const result= await axios.get("http://localhost:8383/user/getuser");
    console.log(result.data);
    setUser(result.data);
   };
      

  return (
    <>
    <div><NavDemo /></div>
   
    <table className='table '>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">Mobile</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>
    {
       users.map((user,index)=>(
        <tr>
            <th scope='row' key={index}>{index+1}</th>
            <th>{user.username}</th>
            <th>{user.email}</th>
            <th>{user.mobile}</th>
            <th>{user.password}</th>
        </tr>




    ))}


  </tbody>
</table>
</>
  )
}


