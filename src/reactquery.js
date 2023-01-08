import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Header from './components/Header';
import Custom from './components/Custom';
import Todo from './components/Todo';
import User from './components/User';

// function Button() {
//   const { data, error } = useQuery('hello-world', () => {
//     return new Promise(resorve => {
//       setTimeout(() => resorve(Math.random()), 1000)
//     })
//   })

//   console.log({ data, error })
//   return <button>I am a button {data}</button>
// }

const fetcher = () => {
  return new Promise(resolve => {
    return setTimeout(resolve, 1000)
  })
}

function App() {

  const [state, setState] = useState(false)

  const { isIdle } = useQuery(['todo-single-item', 1], fetcher, {
    enabled: state
  })

  // const [visible, setVisible] = useState(true)
  
  // function toggleButton() {
  //   setVisible(visible => !visible)
  // }
  // {visible && <Button />}
  // <button onClick={toggleButton}>Toggle</button>

  return (
    
    <div className="App">
      <header className='App-header'>
        <button onClick={() => setState(c => !c)}>Click Me</button>
      <h1>Welcome to HiQTek</h1>
      </header>
    </div>
  );
}

export default App;
