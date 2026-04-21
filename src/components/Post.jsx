import { useState } from 'react';
import styles from './Post.module.css';
function Post({author,content})
{
 const [postContent,setPostContent]= useState(content);

 const handleInputChange=(event)=>{
    setPostContent(event.target.value);
 };
 return (
 <div className={styles.container}>
 <p className={styles.author}>{author}</p>
  <p className={styles.content}>{postContent}</p>
  <input
    className={styles.input}
    type="text"
    onChange={handleInputChange}
    placeholder='Edit post content'
    />
  </div>
 );
}
export default Post;