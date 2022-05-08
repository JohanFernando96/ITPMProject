import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../services/awareness.api";

function AwarenessAdmin() {
  const [posts, setPosts] = useState([
    {
      _id: "",
      title: "",
      content: "",
      category: "",
      date: "",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getAllPosts();
  }, []); 

  const getAllPosts = async () => {
    const response = await getPosts();
    console.log(response.data);
    setPosts(response.data); 
  };

  const deletePostData = async (id) => {
    if (window.confirm("Please confirm delete")) {
      const response = await deletePost(id);
      getAllPosts();
    }
  };

  return (
    <div className="container">
      <h4>Mitigation And Prevention</h4>
      <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderBlock: null, paddingLeft: 10, marginLeft: 280, marginBottom: 20, marginTop: 20}}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
      <div className="row post_body">
        <div className="col"></div>
        <div className="col-sm-12 col-md-9">
          <Link to="/awareness/create"> <button type="button" className="btn btn-success"> Create Post </button>
          </Link>

          <hr />

          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Posts </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
            {posts
                    .filter((PostSearch) => {
                      if (searchTerm == "") {
                        return PostSearch;
                      } else if (
                        PostSearch.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return PostSearch;
                      }
                    })
              .map((post) => (
                <tr>
                  <td>
                    <a>{post.title.replace(/_/g, " ")}</a>
                  </td>
                  <td>
                    <Link to={`/awareness/AwarenessEdit/edit/${post._id}`}>
                      <button className="btn btn-info btn-sm">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletePostData(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AwarenessAdmin;