import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";

const PostsLists = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  // select a reducer to get posts
  // const posts = useSelector(selectAllPosts);
  // after using entity adapter
  const orderedPosts = useSelector(selectPostIds);

  // }, [dispatch, postsStatus]);

  let content = "";
  if (isLoading) {
    content = <p>"Loading ...."</p>;
  } else if (isSuccess) {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostsExcerpt key={post.id} post={post} />
    // ));
    content = orderedPosts.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <section>{content}</section>;
};

export default PostsLists;
