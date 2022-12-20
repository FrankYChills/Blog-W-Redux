import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useEffect } from "react";

const PostsLists = () => {
  const dispatch = useDispatch();
  // select a reducer to get posts
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  //reverse posts ordering(latest first)

  let content = "";
  if (postsStatus === "loading") {
    content = <p>Loading ....</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsLists;
