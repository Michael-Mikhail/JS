import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const handleClick=()=>{
setCount(count+1)
};
  return (
  <div>
    <button onClick={handleClick}>Add Animal </button>
    <div>
      Number of animals:{count}
    </div>
  </div>
    
    
  );
}


export default App
