
import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount]=useState(0);
  return (
    <div className='App'>

   <h1> redux </h1>
   

   <button className='button' onClick={()=>{setCount(count+1)}}>+</button>
   <span className='value'>{count}</span>
   <button className='button' onClick={()=>{setCount(count-1)}}>-</button>
  
    
    </div>
  );
}

export default App;
