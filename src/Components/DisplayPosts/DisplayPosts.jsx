import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import './DisplayPosts.css';
import ButtonCombination from "../ButtonCombination/ButtonComination";

const DisplayPosts = (props) => {
  return (
      <div className="border-box">
          {props.parentPosts.map((post) => {
            return (
              <div style={{backgroundColor:"lightblue", marginBottom:"10px", borderStyle:"groove" }}>
                <h2>{post.name}</h2>
                <p>{post.post}</p>
                <h3>{post.date}</h3>
                <LikeButton />
                <DislikeButton />
              </div>
          );
        })}
      </div>
  );
};


export default DisplayPosts;

/* /////////////////////////////////////////////// demo below

// Post Component (FILE)
// const Post = ({ element }) => { 
//   return (
//     <div>
//       <h2>{element.personsName}</h2>
//       <p>{element.postText}</p>
//       <div>
//         <button>Like</button>
//         <button>Dislike</button>
//       </div>
//     </div>
//   );
// };

// Mapper Component (FILE)
// const Arraymapper = (props) => {
//   return (
//     <ul>
//       {props.array.map((el) => <li><Post element={el} /></li>)}
//     </ul>
//   );
// };  */
