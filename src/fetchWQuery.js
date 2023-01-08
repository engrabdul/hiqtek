//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from 'react-query';


const fetcher = (repo) => {
  return fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
}

function App() {

  const [repoName, setRepoName] = useState('')

  const { isLoading, data} = useQuery(['github-data', repoName], () => fetcher(repoName))

  if(isLoading) {
    return <div className="App">
      <input type="text" value={repoName}
      onChange={(e) => setRepoName(e.target.value)}
      />
     <h2>Loading...</h2>
    </div>
  }

  return (
    
    <div className="App">
      <input type="text" value={repoName}
      onChange={(e) => setRepoName(e.target.value)}
      />
      <h3>Name: {data.name}</h3>
      <h3>Description: {data.description}</h3>
      <h3>Stars: {data.stargazers_count}</h3>
    </div>
  );
}

export default App;
