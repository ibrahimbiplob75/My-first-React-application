import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
  function biplob(){
    prompt("Clicked on Butoon");
  }
  const  Sum=(a,b)=>{
      alert(a+b);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={biplob}>Click Here</button>
        <button onClick={()=>alert("Hello Biplob Sir")}>Alert</button>
        <button onClick={()=>Sum(3,7)}>SUM </button>
       
      </div>
      <Counter></Counter>
      <Users></Users>
     
      
    </>
  )
}



export default App
