import React, { useState } from 'react';
import './AddPostForm.css'

const AddPostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    // Destructuring:
    //      with objects: HAVE to use the same name
    //      with arrays: can use/declare ANY name you want

    // console.log(num[0])
    
    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            date: date,
        };
        props.addNewPostProperty(newPost);
    }

    return (
        <form onSubmit={handleSubmit} className="adam-form-container">
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)}/>
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type="submit">Create</button>
        </form>
      );
}
 
export default AddPostForm;

