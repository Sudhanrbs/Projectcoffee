import React, { useEffect, useState } from 'react'
import NavDemo from './NavDemo'
import axios from 'axios'

export const Table = () => {
    const  [users,setUser]= useState([]);

   useEffect(()=>{
    loadusers();
   },[]);

   const loadusers=async()=>{
    const result= await axios.get("http://localhost:8383/user/getuser")
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
        users.map((User,index)=>{
            <tr key={User}>
            <th scope="row" ></th>
            <td>{User.username}</td>
            <td>{User.email}</td>
            <td>{User.mobile}</td>
            <td>{User.password}</td>
          </tr>
        })
       
    }

  </tbody>
</table>
</>
  )
}
export default Table;

