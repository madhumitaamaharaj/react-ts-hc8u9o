import * as React from 'react';
import reactDom from"react-dom";
import './style.css';

export default function App(props) {
  return (
    <div>
      <h1>Register here ...</h1>
      <input type="text" placeholder="mobile ..."/>
      <input type="password" placeholder="password ..."/>
      <button>Submit</button>
    </div>
  );
}
