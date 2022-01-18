import React from 'react';
import ReactDom from 'react-dom';

//Get current Date and time 
const fname = "sonali";
const lname = "nath";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
ReactDom.render(
  <>
  <h1>{`Hello, My name is ${fname} ${lname}`}</h1>
  <p>Current date is = {currentDate}</p>
  <p>Current time is = {currentTime}</p>
  </>,
  document.getElementById('root')
  
);