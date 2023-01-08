import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Custom from './components/Custom';
import Todo from './components/Todo';
import User from './components/User';

function App() {
  const [x, setX] = useState(false)
  return (
    <div class={x ? 'dark' : ''} onClick={() => setX(x => !x)} >
      <Router>
      <div className="bg-gray-100 text-green dark:bg-gray-900 dark:text-white h-screen">
          <nav>
            <ul>
              <li><Link to="/todo">Todo App</Link></li>
              <li><Link to="/">Home</Link></li>
              <li>
                <Link to="/user/afeez">Profile 1</Link>
              </li>
              <li>
                <Link to="/user/tunde">Profile 2</Link>
              </li>
              <li>
                <Link to="/user/bidemi">Profile 3</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/user/:username" element={<User />}></Route>
            <Route path="/" element={
              <h1>Welcome to HiQTek</h1>
              }>
            </Route>
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
