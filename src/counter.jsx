
import {useState} from 'react';

export default function Counter(){
  const [count,setCount]=useState(0) // count=0
    // functio setCount(count){
    // count++
    //}
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> setCount(count+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click
        </button>
      </div>
  )
    
}
