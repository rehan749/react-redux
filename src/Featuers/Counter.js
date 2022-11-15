import React from 'react'
import { useState } from 'react';
export default function Counter() {
  const [count, setCount]=useState(0);
  return (
    <div>
      <button className='button' onClick={()=>{setCount(count+1)}}>+</button>
   <span className='value'>{count}</span>
   <button className='button' onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  )
}
