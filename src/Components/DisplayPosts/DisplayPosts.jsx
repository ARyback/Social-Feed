const DisplayPosts = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.parentPosts.map((post) => {
          return (
            <tr>
              <td>{post.name}</td>
              <td>{post.post}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
// ///////////////////////////////////////////// demo below

// // Post Component (FILE)
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

// // Mapper Component (FILE)
// const Arraymapper = (props) => {
//   return (
//     <ul>
//       {props.array.map((el) => <li><Post element={el} /></li>)}
//     </ul>
//   );
// };
