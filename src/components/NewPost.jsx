import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({closeDialog,onAdd}) {

     const [authorName,setAuthorName]=useState("");
     const [postContent,setPostContent]=useState("");

      const handleAuthorNameChange=(event)=>{
       setAuthorName(event.target.value);
      };

         const handlePostContentChange=(event)=>{
         setPostContent(event.target.value);
      };
      const handleSubmit = (event) => {
    event.preventDefault();
     onAdd(authorName, postContent);
     setAuthorName("");
     setPostContent("");
     closeDialog()
};

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Author Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter author name"
          className={styles.input}
          autoFocus
          value={authorName}
          onChange={handleAuthorNameChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          placeholder="Enter post content"
          className={styles.textarea}
          rows="4"
          onChange={handlePostContentChange}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          Create Post
        </button>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={closeDialog}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewPost;