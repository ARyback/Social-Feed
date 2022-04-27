import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {

  const [posts, setPosts] = useState([{name: "David LaGrange", message: "I love playing guitar. Does anyone want to play with me?"}]);

  return (
    <div>
      <AddPostForm />
      <DisplayPosts parentPosts={posts}/>
    </div>
  );
}

export default App;
