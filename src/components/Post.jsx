import { useState } from 'react';
import styles from './Post.module.css';
function Post({author,content=" ",onEdit, onDelete})
{
 
 const [editAbleContent,setEditAbleContent] = useState(content);
  const [isEditing,setIsEditing] = useState(false);

 const handleInputChange=(event)=>{
    setEditAbleContent(event.target.value);
 };

const handleEditClick=()=>{
    setIsEditing(true);
 };
 
 const handleCancelClick=()=>{
    setIsEditing(false);
    setEditAbleContent(content)
 };
 
const handleSaveClick = () => {
  if (onEdit) {
    onEdit(editAbleContent);
  }
  setIsEditing(false);
};
 
 
 return (
 <div className={styles.container}>
 <p className={styles.author}>{author}</p>
  <p className={styles.content}>{editAbleContent}</p>
{!isEditing && (
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={handleEditClick}>Edit</button>
          <button 
            className={styles.button} 
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      )}
   
{isEditing&&<div className={styles.editSection}>
  <input
    className={styles.input}
    value={editAbleContent}
    type="text"
    onChange={handleInputChange}
    placeholder='Edit post content'
    />
    <div className={styles.buttonGroup}>
        <button className={styles.button+ " " +styles.buttonSave} onClick={handleSaveClick}>Save</button>
        <button className={styles.button+ " " +styles.buttonCancel} onClick={handleCancelClick}>Cancel</button>

    </div>
  </div>}
  </div>
 );
}
export default Post;