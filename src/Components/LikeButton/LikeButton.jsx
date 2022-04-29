import { BsHandThumbsUp } from "react-icons/bs";
import './LikeButton.css'
import React, { useState } from 'react';

const LikeButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if (buttonClass === "inactive") {
            setButtonClass("active");
        } else {
            setButtonClass("inactive");
        }
    }

    return <div><button className={buttonClass} onClick={handleClick}><BsHandThumbsUp/></button></div>;
};
 
export default LikeButton;

