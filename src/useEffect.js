import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Custom from './components/Custom';
import { useState, useEffect } from 'react';

console.log("Hello" && "Afeez")

let counter = 0


// useState
function App() {

  const [counter, setCounter ] = useState(2000)

  useEffect(() => {
    console.log("I ran yesterday")
  }, [counter])

  function increase() {
    setCounter(oldCounter => oldCounter + 1)
  }

  function decrease() {
    setCounter(oldCounter => oldCounter - 1)
  }

  return (
    <div className="App">
      <Header />
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Click Me + </button>&nbsp;&nbsp;
      <button onClick={decrease}>Click Me - </button>
      <div id="content">
        <h3>This is content</h3>
      </div>
      <Custom name="Afeez" />
    </div>
  );
}

export default App;
