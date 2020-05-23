import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
    const msg = props.msg;
    const data = msg.split("\n");
    const print = data.map((subject)=>
        <li>{subject}</li>
    )
  return (
    <div>
      <ul>
          {print}
      </ul>
    </div>
  );
}

export default App;
