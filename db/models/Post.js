import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String },
  image: {
    width: { type: String, required: true },
    height: { type: String, required: true },
    url: { type: String, required: true },
  },
  content: { type: String },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
