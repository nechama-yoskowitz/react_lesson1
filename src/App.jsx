
import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
function App() {
const [isFormOpen,setIsFormOpen] = useState(false);
const [posts,setPosts ]= useState([
{author: "Nechama Yoskowitz" ,content: "This is my first post"},
{author: "Lea Cohen", content: "I am here"},
{author: "Sara Levi", content: "first post"}
]) ;

const handleEditPost = (index, newContent) => {
 
    const updatedPosts = [...posts];
    updatedPosts[index].content=newContent;
    setPosts(updatedPosts);
  
  };

const handleAddPost=(author,content)=>{
  setPosts((prevPosts) => [...prevPosts, {author,content}])
}
const handleLogPosts=()=>
{
console.log("Current posts array: ", posts)
};
const handleAddNewPostClick=()=>{
setIsFormOpen(true);
};
 
const handleCloseDialog =()=>{
  setIsFormOpen(false);
};

const handleDeletePost = (indexToDelete) => {
  setPosts((prevPosts) => prevPosts.filter((_, index) => index !== indexToDelete));
};


  return (
  <>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  }}
>
  <button className="button" onClick={handleAddNewPostClick}>+ Add New Post</button>
  <button className="button" onClick={handleLogPosts}>
    Log Posts to Console
  </button>
</div>

    {posts.map((post,index)=><Post key={index} author={post.author} content={post.content} onEdit={(newContent)=>handleEditPost(index,newContent)} onDelete={() => handleDeletePost(index)}/>)}
    <div style={{ display: "flex", justifyContent: "center" }}>

  </div>
{isFormOpen && (
  <>
    {/* לחיצה על הרקע האפור תסגור את המודאל */}
    <div className="modelBackdrop" onClick={handleCloseDialog} />
    
    <div className="modalContent" >
      <NewPost closeDialog={handleCloseDialog} onAdd={handleAddPost} />
    </div>
  </>
)}
  </>
  
    );
  
}

export default App
