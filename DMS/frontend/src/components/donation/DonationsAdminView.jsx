import React, { useEffect, useState } from "react";
import "../../css/donations.css";
import { getDonations, deleteDonation } from "../../services/donations.api.js";
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

const DonationsAdminView = () => {
  const [donations, setDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyle();

  useEffect(() => {
    getAllDonations();
  }, []);

  const getAllDonations = async () => {
    const response = await getDonations();
    console.log(response.data);
    setDonations(response.data);
  };

  const deleteDonationData = async (id) => {
    if (window.confirm("Delete Donation Record?")){
      const response = await deleteDonation(id);
      getAllDonations();
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
         Donations </h2>
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
            <TableCell>Donator</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {donations
                    .filter((donationSearch) => {
                      if (searchTerm == "") {
                        return donationSearch;
                      } else if (
                        donationSearch.Donator
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return donationSearch;
                      }
                    })
          .map((donation) => (
            <TableRow className={classes.row} key={donation._id}>
              <TableCell>{donation._id}</TableCell>
              <TableCell>{donation.Donator}</TableCell>
              <TableCell>{donation.Email}</TableCell>
              <TableCell>{donation.Address}</TableCell>
              <TableCell>{donation.Items}</TableCell>
              <TableCell>{donation.Quantity}</TableCell>
              <TableCell>{donation.Phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/Donations/edit/${donation._id}`}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color=""
                  onClick={() => deleteDonationData(donation._id)}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" style={{ marginLeft: 120, marginBottom: 30 }} component={Link} to={`/Donations/add`} >
        add Donation{" "}
      </Button>
      <Button variant="contained" color="primary" style={{ marginLeft: 50, marginBottom: 30 }} component={Link} to={`/Donations/report`} >
        report Generation{" "}
      </Button>
    </div>
  );
};

export default DonationsAdminView;