import React, { useEffect, useState } from "react";
import "../../css/feedback.css";
import { getFeedbacks, deleteFeedback } from "../../services/feedbacks.api.js";
import {  TableCell,  TableRow,  Table,  TableHead,  TableBody,  Button,  makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";


const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 100px 200px 50px",
  },
  thead: {
    "& > *": {
      background: "#808080",
      color: "#FFFFFF",
      fontSize: 15,
    },
  },
  row: {
    "& > *": {
      fontSize: 15,
    },
  },
});

const FeedbacksAdminView = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyle();

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const getAllFeedbacks = async () => {
    const response = await getFeedbacks();
    console.log(response.data);
    setFeedbacks(response.data);
  };

  const deleteFeedbackData = async (id) => {
    if (window.confirm("Delete Feedback Record?")){
      const response = await deleteFeedback(id);
      getAllFeedbacks();
    }
  };


  return (
   <div>
      <h2 className="DonationsHeading" 
      style={{ 
         marginTop: 50,
         color:'black',
         fontSize: "3.5rem",
         fontWeight: "800", 
      }}> 
         Feedback Admin View </h2>
      <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderBlock: null, 
                         paddingLeft: 10,
                         marginLeft: 50, 
                         marginTop: 20,
                         border: '2px solid #007bfa',
                         borderRadius: '24px',
                         height: '43px',
                        }}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {feedbacks
                    .filter((feedbackSearch) => {
                      if (searchTerm == "") {
                        return feedbackSearch;
                      } else if (
                        feedbackSearch.Name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return feedbackSearch;
                      }
                    })
          .map((feedback) => (
            <TableRow className={classes.row} key={feedback._id}>
              <TableCell>{feedback._id}</TableCell>
              <TableCell>{feedback.Name}</TableCell>
              <TableCell>{feedback.Email}</TableCell>
              <TableCell>{feedback.Phone}</TableCell>
              <TableCell>{feedback.Feedback}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/Feddbacks/edit/${feedback._id}`}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color=""
                  onClick={() => deleteFeedbackData(feedback._id)}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" style={{ marginLeft: 120, marginBottom: 30 }} component={Link} to={`/Feedbacks/add`} >
        add Feedback{" "}
      </Button>
      <Button variant="contained" color="primary" style={{ marginLeft: 50, marginBottom: 30 }} component={Link} to={`/Feedbacks/report`} >
        report{" "}
      </Button>
    </div>
  );
};

export default FeedbacksAdminView;