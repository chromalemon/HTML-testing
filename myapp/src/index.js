import React from 'react';
import ReactDOM from 'react-dom/client';

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];
const arrayCombined = [...arrayOne, ...arrayTwo];
const [one, two, ...rest] = arrayCombined

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myElement);






