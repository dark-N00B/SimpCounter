import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState (0)
  
  const handleClickIncrement = ()=> {
    setCount(count+1)
  }

  const handleClickDecrement = () => {
    setCount(count-1)
  }

  const resetCounter = () => {
    setCount(0)
  }
  

  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
      {count}
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={resetCounter}>=</button>
    </div>
  );
}

export default App;
