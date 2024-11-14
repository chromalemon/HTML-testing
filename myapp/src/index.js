import React from 'react';
import ReactDOM from 'react-dom/client';

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];
const arrayCombined = [...arrayOne, ...arrayTwo];
const [one, two, ...rest] = arrayCombined

const myFirstElement = 
  <div> 
  <h1> Hi </h1>
  <h2> {one} {two} </h2>
  </div>;

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(myFirstElement);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

const mySecondElement = 
  <p> {rest} </p>;

root2.render(mySecondElement);


