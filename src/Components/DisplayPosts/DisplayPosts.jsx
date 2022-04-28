import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const DisplayPosts = (props) => {
  return (
      <div>
          {props.parentPosts.map((post) => {
            return (
              <div>
                <h2>{post.name}</h2>
                <p>{post.post}</p>
                <h3>{post.date}</h3>
                <button onClick={console.log("I like this!")}>Like</button>
                <button onClick={console.log("I like this!")}>Dislike</button>
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
