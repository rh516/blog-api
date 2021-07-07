import Post from '../models/post_model';

export const createPost = async (postFields) => {
  // await creating a post
  // return post
  const newPost = new Post();
  newPost.title = postFields.title;
  newPost.content = postFields.content;
  newPost.coverUrl = postFields.coverUrl;

  try {
    const savedPost = await newPost.save();
    return savedPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
};

export const getPosts = async () => {
  // await finding posts
  // return posts
  try {
    const foundPosts = await Post.find({});
    return foundPosts;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
};

export const getPost = async (id) => {
  // await finding one post
  // return post
  try {
    const foundPost = await Post.findById(id);
    return foundPost;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
};

export const deletePost = async (id) => {
  // await deleting a post
  // return confirmation
  try {
    const deletedPost = await Post.deleteOne({ _id: id });
    return deletedPost;
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
};

export const updatePost = async (id, postFields) => {
  // await updating a post by id
  // return *updated* post
  try {
    const updatedPost = await Post.findOneAndUpdate({ _id: id }, postFields, { new: true });
    return updatedPost;
  } catch (error) {
    throw new Error(`update post error: ${error}`);
  }
};
