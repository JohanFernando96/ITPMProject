import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editPost, getPosts } from "../../services/awareness.api.js";

const initialState = {
  _id: "",
  title: "",
  content: "",
  category: "",
  date: "",
};

function PostEdit() {
  const [posts, setPosts] = useState(initialState);

  const { title, content, category, date } = posts; 
  const { id } = useParams(); 
  const history = useHistory();


  useEffect(() => {
    loadPostData(id);
  }, []); 

  const loadPostData = async (id) => {
    const response = await getPosts(id);
    setPosts(response.data);
  };
  // onChangeHandler
  const changeHandler = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value }); 
    console.log(posts);
  };

  const editPostDetail = async () => {
    await editPost(id, posts);
    history.push("/awareness/admin"); 
  };

  return (
    <div className="container">
      <div className="row report_body">
        <div className="col"></div>
        <form>
          <div className="form-group">
            <label for="title">
            Enter the Title
            </label>
            <input
              className="form-control"
              onChange={changeHandler}
              name="topic"
              value={title}
            >
            </input>
          </div>
          <div className="form-group">
            <label for="date">Select the date:</label>
            <input
              onChange={changeHandler}
              type="date"
              name="date"
              value={date}
              placeholder={`${date}`}
            />
          </div>

          <div className="form-group">
            <label for="category">Title category</label>
            <select
              className="form-control"
              onChange={changeHandler}
              name="category"
              value={category}
            >
              <option>Choose..</option>
              <option>Landslide</option>
              <option>Earthquake</option>
              <option>Flood</option>
              <option>Fire</option>
              <option>Hurricane</option>
              <option>other</option>
            </select>
          </div>
          <div className="form-group">
            <label for="disaster_content">Content</label>
            <textarea
              className="form-control "
              onChange={changeHandler}
              name="content"
              value={content}
              rows="10"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success btn_publish"
            onClick={() => editPostDetail()}
          >
            Edit
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default PostEdit;
