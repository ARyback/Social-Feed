import { BsHandThumbsDown} from "react-icons/bs";
import './DislikeButton.css'
import React, { useState } from 'react';

const DislikeButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if (buttonClass === "inactive") {
            setButtonClass("active");
        } else {
            setButtonClass("inactive");
        }
    }

    return <div><button className={buttonClass} onClick={handleClick}><BsHandThumbsDown/></button></div>;
};
 
export default DislikeButton;
