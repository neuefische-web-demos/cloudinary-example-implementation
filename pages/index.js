import Form from "@/components/Form";
import PostList from "@/components/PostList";

import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  function handleAddPost(newPost) {
    setPosts([{ _id: uuid(), ...newPost }, ...posts]);
  }

  return (
    <>
      <h1>New Post</h1>
      <Form onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </>
  );
}
