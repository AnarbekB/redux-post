import React from 'react';
import {AsyncPosts} from "./components/AsynchPosts";
import SyncPosts from "./components/SynchPosts/SyncPosts";
import PostForm from "./components/PostForm/PostForm";

function App() {
  return (
    <div className="container">
      <div className='row'>
          <div className='col'>
              <PostForm />
          </div>
      </div>
        <div className='row'>
            <div className='col'>
                <h2>Synchronous</h2>
                <SyncPosts />
            </div>
            <div className='col'>
                <h2>Asynchronous</h2>
                <AsyncPosts/>
            </div>
        </div>
    </div>
  );
}

export default App;
