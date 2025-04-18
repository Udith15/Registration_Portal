import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {

    const navi=useNavigate();

    const gotologin=()=>{
        navi('/login')
    }
    const gotoreg=()=>{
        navi('/register')
    }
  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <p>This is the main content of the homepage.</p>

      <button onClick={gotologin}>Login</button>
      <button onClick={gotoreg}>Register</button>
    </div>
  );
}

export default Homepage;