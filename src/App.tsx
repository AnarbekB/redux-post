import React from 'react';
import {PostForm} from "./components/PostForm";
import {SyncPosts} from "./components/SynchPosts";
import {AsyncPosts} from "./components/AsynchPosts";

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
                <SyncPosts posts={[{id: 1, name: 'Hello'}, {id: 2, name: 'World'}]}/>
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
