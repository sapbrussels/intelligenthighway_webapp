import React from 'react';
import { Link } from 'react-router-dom';



function App( {history}) {
  return (
    <div>Home<div/>
    {/*how to go other pages*/}
       <Link to='/about'>About</Link> 
     <button>onClick={()=>{
      history.push('/About')
      }}
  
     </button>
    </div>
  );
}

export default App;
