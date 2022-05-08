import { useEffect, useState } from "react";
import { getFeedbacks } from "../../services/feedbacks.api.js";
import { TableCell, TableRow, Table, TableHead, TableBody, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#393939',
            color: 'white',
            fontSize: 16
        }
    },
    row: {
        '& > *': {
            fontSize: 16
        }
    }
})
const FeedbacksUserView = ()=> {

   const [ feedback, setFeedbacks ] = useState([]);
   const classes = useStyle();

   const [searchTerm, setSearchTerm] = useState("");
   
    useEffect(() => {
        getAllFeedbacks();
    }, [])


const getAllFeedbacks = async() => {
       const response = await getFeedbacks();
       console.log(response.data);
       setFeedbacks(response.data);
    }


    return (  
<div class="main">
        <h2 className="VolunteerHeading"> Feedback Details </h2>
        <input
                  className="form-control mr-sm-2 searchbar_report"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderBlock: null, paddingLeft: 10, marginLeft: 50, marginTop: 20}}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
      <Table className = {classes.table}>
         <TableHead>
             <TableRow className = {classes.thead}>
                 <TableCell>ID</TableCell>
                 <TableCell>Name</TableCell>
                 <TableCell>Email</TableCell>
                 <TableCell>Phone Number</TableCell>
                 <TableCell>Feedback</TableCell>
             </TableRow>
         </TableHead> 
         <TableBody>
         {feedback
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
             .map(feedback => (
                 <TableRow className = {classes.row} key={feedback._id}>
                 <TableCell>{feedback._id}</TableCell>
                 <TableCell>{feedback.Name}</TableCell>
                 <TableCell>{feedback.Email}</TableCell>
                 <TableCell>{feedback.Phone }</TableCell>
                 <TableCell>{feedback.Feedback }</TableCell>
                 </TableRow>
              ))
             }
         </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 120, marginBottom: 30 }}
        component={Link}
        to={`/Feedback/add`}
      >
        Add Feedback{" "}
      </Button> 
    </div>
    );
}    

export default FeedbacksUserView;
