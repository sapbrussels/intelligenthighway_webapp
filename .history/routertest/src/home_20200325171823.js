import React from 'react';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div>Home<div/>
       <Link to='/about'><button>About</button></Link> // how to go other pages 
    </div>
  );
}

export default App;