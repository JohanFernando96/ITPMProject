import Post from "../model/awareness.model.js";

//############ getReports ###############
export const getPosts = async (request, response) => {
  try {
    //testing
    //res.send("get report is working on /");
    let posts = await Post.find(); // Report is class
    response.json(posts);
  } catch (error) {
    response.json({ message: error.message });
  }
};
//############ getReports by id ###############
export const getPostById = async (request, response) => {
  try {
    const id = request.params.id;
    const post = await Post.findById(id); // Report is class
    response.json(post); // again sending it as response
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ Add report ###############
export const addPost = async (request, response) => {
  try {
    //testing
    //res.send("add report is working on /reports/add");
    const post = request.body; // read from api and pass as param to class
    const newPost = new Post(post); // indirectly we are checking the shema as well

    await newPost.save(); // save is asyncronous
    response.json(newPost);
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ edit report by id ###############
export const editPostById = async (request, response) => {
  try {
    const post = request.body;
    const editedPost = new Post(post);

    const response = await Post.updateOne(
      { _id: request.params.id },
      editedPost
    ); // filter , tobeeditedPart
    response.json(editedPost);
  } catch (error) {
    response.json({ message: error.message });
  }
};

//############ delete by id ###############
export const deletePost = async (request, response) => {
  try {
    await Post.deleteOne({ _id: request.params.id });
    response.json("selected report deleted sucessfully");
  } catch (error) {
    response.json({ message: error.message });
  }
};
