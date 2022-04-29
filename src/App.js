import React, { useEffect, useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {

  const [posts, setPosts] = useState([{name: "Adam", post: "Hey everyone! Check this out", date: "12/13/2022"}]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  useEffect(()=>{console.log("useEffect ran on :", new Date())}, [posts]);

  return (
    <div >
      <AddPostForm addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPosts={posts}/>
    </div>
  );
}

export default App;
