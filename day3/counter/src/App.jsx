import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter=10;
  const Addvalue=()=>{
    counter=counter+1;
    console.log(counter);
  }

  return (
    <>
     <h1>React Counter</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={Addvalue}>Add Value</button>
     <br />
     <button>Remove value</button>
    </>
  )
}

export default App
