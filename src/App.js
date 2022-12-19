import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Custom from './components/Custom';
import Todo from './components/Todo';
import User from './components/User';

function App() {
  return (
    <Router>
    <div className="App">
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
          
          <Route path="/todo" element={<Header />}></Route>
          <Route path="/user/:username" element={<User />}></Route>
          <Route path="/" element={
            <h1>Welcome to HiQTek</h1>
            }>
          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
