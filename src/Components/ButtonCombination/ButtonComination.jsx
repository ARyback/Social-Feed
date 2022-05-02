import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import React, { useState } from 'react';
import './Components/LikeButton/LikeButton.css'


const ButtonCombination = (props) => {

    const [likeButtonClass, setLikeButtonClass] = useState("inactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState("inactive");

    function handleClick(){
        if (likeButtonClass === "inactive" && dislikeButtonClass === "active") {
            setLikeButtonClass("inactive");
            setDislikeButtonClass("active");
        } 
        else if (likeButtonClass === "active" && dislikeButtonClass === "inactive") {
            setLikeButtonClass("active");
            setDislikeButtonClass("inactive");
        } 
        else if (likeButtonClass === "active" && dislikeButtonClass === "active") {
            setLikeButtonClass("inactive");
            setDislikeButtonClass("inactive");
    } else {
            setLikeButtonClass("inactive");
            setDislikeButtonClass("inactive");

    }

    return <div><button className={buttonClass} onClick={handleClick}><BsHandThumbsUp/></button></div>;
};

export default ButtonCombination;
 
