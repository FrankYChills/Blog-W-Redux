// import Counter from "./features/counter/Counter";
import PostsLists from "./features/posts/PostsLists";
import AddForm from "./features/posts/AddForm";
import SinglePost from "./features/posts/SinglePost";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Home route '/' */}
      <Route path="/" element={<Layout />}>
        {/* index page on home route '/' */}
        <Route index element={<PostsLists />} />
        {/* "/post" route */}
        <Route path="post">
          {/* index pasge on /post */}
          <Route index element={<AddForm />} />
          {/* route /post/:id */}
          <Route path=":postId" element={<SinglePost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
