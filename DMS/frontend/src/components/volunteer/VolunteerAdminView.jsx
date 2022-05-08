import { useEffect, useState } from "react";
import { getVolunteer, deleteVolunteer } from "../../services/volunteer.api.js";
import { TableCell, TableRow, Table, TableHead, TableBody, Button, makeStyles } from "@material-ui/core";
import "../../css/volunteer.css";
import { Link } from "react-router-dom";
import axios from "axios";


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 100px 200px 50px'
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
const VolunteerAdminView = ()=> {

   const [ volunteer, setVolunteer ] = useState([]);
   const classes = useStyle();
   
    useEffect(() => {
        getAllVolunteer();
    }, [])

const getAllVolunteer = async() => {
       const response = await getVolunteer();
       console.log(response.data);
       setVolunteer(response.data);
    }

const deleteVolunteerData = async (id) => {
  if (window.confirm("Please confirm your deletion ?...!!!")){
    const response = await deleteVolunteer(id);
    getAllVolunteer();
  }
};


//state for the search bar
const [searchTerm, setSearchTerm] = useState("");

return (  

    <div class="main">
        <h2 className="VolunteerHeading"> Volunteer Management </h2>
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
                 <TableCell>First Name</TableCell>
                 <TableCell>Last Name</TableCell>
                 <TableCell>Education</TableCell>
                 <TableCell>Area of Expertise</TableCell>
                 <TableCell>Email</TableCell>
                 <TableCell>Address</TableCell>
                 <TableCell>Phone Number</TableCell>
             </TableRow>
         </TableHead> 
         <TableBody>
         {volunteer
                    .filter((volunteerSearch) => {
                      if (searchTerm == "") {
                        return volunteerSearch;
                      } else if (
                        volunteerSearch.First_name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return volunteerSearch;
                      }
                    })
             .map((volunteer) => (
                 <TableRow className = {classes.row} key={volunteer._id}>
                    <TableCell>{volunteer._id}</TableCell>
                    <TableCell>{volunteer.First_name}</TableCell>
                    <TableCell>{volunteer.Last_name}</TableCell>
                    <TableCell>{volunteer.Education}</TableCell>
                    <TableCell>{volunteer.Area_of_expertise}</TableCell>
                    <TableCell>{volunteer.Email}</TableCell>
                    <TableCell>{volunteer.Address}</TableCell>
                    <TableCell>{volunteer.Phone }</TableCell>
                    <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/Volunteer/edit/${volunteer._id}`}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteVolunteerData(volunteer._id)}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button 
      variant="contained" 
      color="primary" 
      style={{ marginLeft: 50, marginBottom: 30 }} 
      component={Link} to={`/Volunteer/report`} >
        report{" "}
      </Button>
    </div>
    );
}

export default VolunteerAdminView;