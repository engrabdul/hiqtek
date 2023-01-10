//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Post from './components/Post';
import client from './react-query-client';

const fetcher = url => fetch(url).then(res => res.json())

function App() {

  const [postID, setPostID] = useState(null)

  const {isLoading, data: posts } = useQuery('posts', () => fetcher('https://jsonplaceholder.typicode.com/posts'),
  {
    //select: result => result.slice(0, 5)
  })

  if(isLoading) return <h3 className='App'>Loading...</h3>

  if(postID != null) {
    return <Post postID={postID} goBack={() => setPostID(null)} />
  }

  function mutateTitle(id) {
    client.setQueriesData(['post', id], oldData => {
      if(oldData) {
        return {
          ...oldData,
          title: 'Welcome To React JS'
        }
      }
    })
  }

  return (

    <div className="App">
      {posts.map(post => {

        const cachedPost = client.getQueryData(['post', post.id])

        return <p key={post.id}>
          <b>{cachedPost ? '(visited)' : ''}</b>
          <a onClick={() => setPostID(post.id)} href="#">{post.id} - {post.title}</a>
          <button onClick={() => mutateTitle(post.id)}>Mutate Title</button>
        </p>
      })}
    </div>
  );
}

export default App;
