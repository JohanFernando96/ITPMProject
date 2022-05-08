import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { addPost } from "../../services/awareness.api.js";

function AwarenessCreate() {
  const [posts, setPosts] = useState([
    {
      _id: "",
      title: "",
      content: "",
      category: "",
      date: "",
    },
  ]);

  const { title, content, category, date } = posts;

 
  const history = useHistory();

  const errors = {
    titleError: "",
    contentError: "",
    categoryError: "",
  };

  
  const changeHandler = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value }); 
    console.log(posts);
  };
 
  const addPostDetails = async () => {
    await addPost(posts);
    history.push("/awareness/admin");
  };

  const validateTitle = () => {
    if (typeof title == "undefined") {
      console.log("Please select a topic");
    }
  };
  const validateCategory = () => {
    if (typeof category == "undefined") {
      console.log("Please select a option from category");
      //setErrors;
    }
  };
  const validateContent = () => {
    if (!content) {
      console.log("Content of the report cannot be empty");
    }
  };
  const validatePostForm = () => {
    if (typeof title == "undefined") {
      errors.titleError = "Please select a topic";
      console.log("Please select a topic");
      return false;
    }
    if (typeof category == "undefined") {
      errors.categoryError = "Please select a option from category";
      console.log("Please select a option from category");
      return false;
    }
    if (!content) {
      errors.contentError = "Content of the report cannot be empty";
      console.log("Content of the report cannot be empty");
      return false;
    }
    return errors;
  };

  const sendData = () => {
    const validationResult = validatePostForm();
    if (validationResult == false) {
      alert("please complete the form");
    } else {
      addPostDetails();
    }
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
              placeholder={errors.titleError}
              className="form-control"
              onChange={changeHandler}
              name="title"
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
            <label for="disaster_content">Content </label>
            <textarea
              className="form-control "
              onChange={changeHandler}
              placeholder={errors.contentError}
              name="content"
              value={content}
              rows="10"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success btn_publish"
            onClick={() => sendData()}
          >
            Publish
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AwarenessCreate;

