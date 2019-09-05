import React from 'react';
import './App.css';
import Routes from './routes';
import PostsDisplay from './_components/PostsDisplay';

function App() {
  return (
    <div className="App">
      <Routes/>
      <PostsDisplay/>
    </div>
  );
}

export default App;
