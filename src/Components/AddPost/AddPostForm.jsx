import React, { useState } from 'react';

const AddPostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    // Destructuring:
    //      with objects: HAVE to use the same name
    //      with arrays: can use/declare ANY name you want

    // console.log(num[0])
    
    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type="submit">Create</button>
        </form>
      );
}
 
export default AddPostForm;

