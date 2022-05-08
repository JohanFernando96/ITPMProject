import React, { useState, useEffect } from "react";
import { getPosts } from "../../services/awareness.api";
import { Link } from "react-router-dom";

function AwarenessUser() {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-9">
          <h4>Mitigation And Prevention</h4>
          <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderBlock: null, paddingLeft: 10, marginLeft: 12, marginBottom: 30, marginTop: 30}}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
          <div className="post_body">
            <table class="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col">Posts </th>
                  <th scope="col"></th>
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
                    <a>
                      <td>{post.title.replace(/_/g, " ")}</td>
                    </a>

                    <td>
                      <Link to="/awareness/post">
                      <button className="btn btn-sm btn-primary">
                        Details of the topics
                      </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AwarenessUser;
