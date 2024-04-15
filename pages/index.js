import Form from "@/components/Form";
import PostList from "@/components/PostList";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/posts", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>New Post</h1>
      <Form mutate={mutate} />
      <PostList posts={posts} />
    </>
  );
}
