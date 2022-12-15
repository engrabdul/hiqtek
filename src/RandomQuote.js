import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Custom from './components/Custom';
import { useState } from 'react';

console.log("Hello" && "Afeez")

const quotes = [
    'If you are good enough, never do it for free.',
    'I am not afraid of man who practice 1000 kicks 1 time, but rather 1 kick 1000 times',
    'Learn by doing',
    'Learn in hard way'
]


// useState
function App() {

  const [quote, setQuote ] = useState(quotes[0])

  function randomizeQuotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)    
  }

  return (
    <div className="App">
      <div className='quote_div'>{quote}</div>
      <button onClick={randomizeQuotes}>Click Me </button>
      
    </div>
  );
}

export default App;
