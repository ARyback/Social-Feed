import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {

  const [posts, setPosts] = useState([{name: "David LaGrange", post: "I love playing guitar. Does anyone want to play with me?"}]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <AddPostForm addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPosts={posts}/>
    </div>
  );
}

export default App;
