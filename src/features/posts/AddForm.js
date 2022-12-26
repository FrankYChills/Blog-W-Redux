import { useState } from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

import { useAddNewPostMutation } from "./postsSlice";

const AddForm = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const canSave =
    Boolean(title) && Boolean(content) && Boolean(userId) && !isLoading;

  const users = useSelector(selectAllUsers);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const onSave = async () => {
    if (canSave) {
      // dispatch(postAdded(title, content, userId));
      try {
        await addNewPost({ title, body: content, userId }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (e) {
        console.error("Failed to save the post", e);
      }
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSave} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddForm;
