import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) /*const[constantePrincipal, metodoModificador]
                                         = useState(principalValue)*/ 
  const [count2, setCount2] = useState(100)
  function aumentar(){
    setCount2((count2)=> count2 + 100)
  }
  
  function restar(){
    setCount((count)=> {
      if(count == -200){
        alert('Llego a su fin');
      }else{
        return count - 100;
      }
      return count
    } )
  }
  function sumar(){
    setCount((count) => {
      if(count == 200){
        alert('Llego a su fin');
      }else{
        return count + 100;
      }
      return count
    })
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div id='divi'>  
          <button onClick={()=> restar()}> Restar - </button>
          <h3>count is {count} </h3> 
          <button onClick={() => sumar()}> Sumar + </button>
          {/*<button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>*/}
        </div>
        <p>
          Segundo Contador: 
          {count2}
        </p>
        <button onClick={()=> aumentar()}>Aumentar el contador 2</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
