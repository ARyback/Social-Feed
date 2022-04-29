import { BsHandThumbsDown} from "react-icons/bs";
import './DislikeButton.css'

const LikeButton = (props) => {
    function handleClick(){
        
    }
    return <div><button className="inactive" onClick="handleClick"><BsHandThumbsDown/></button></div>;
}
 
export default LikeButton;
