import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter}from"react-router-dom";
// import Project from './Components/Assets/Project';
// import { Home } from './Components/Assets/Home';
import Table from './Components/Assets/Table';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Table />
  </BrowserRouter>,
)
