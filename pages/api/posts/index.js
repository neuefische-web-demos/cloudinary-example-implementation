import dbConnect from "@/db/dbConnect";
import Post from "@/db/models/Post";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const posts = await Post.find();

      response.status(200).json(posts);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const newPost = request.body;

      await Post.create(newPost);

      response.status(201).json({ status: "Post created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
