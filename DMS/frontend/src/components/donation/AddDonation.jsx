import React, { useState } from "react";
import {  FormGroup,  FormControl,  Input,  InputLabel,  Button,  Typography,  makeStyles,} from "@material-ui/core";
import { addDonation } from "../../services/donations.api.js";
import { useHistory } from "react-router-dom";

//takes the values from the db object
const initialValue = {
  Donator: "",
  Email: "",
  Address: "",
  Items: "",
  Quantity: "",
  Phone: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 15,
    },
  },
});


const AddDonation = () => {
  const [donation, setDonation] = useState(initialValue);
  const { Donator, Email, Address, Items, Quantity, Phone } = donation;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const addDonationDetails = async () => {
    await addDonation(donation);
    history.push("/Donations");
  };

  const errors = {
    DonatorError: "",
    EmailError: "",
    AddressError: "",
    ItemsError: "",
    QuantityError: "",
    PhoneError: "",
  };
  


   // form validation
   const validateDonator = () => {
    if (!Donator) {
      console.log("Donator field is empty");
    }
  };
  const validateAddress = () => {
    if (!Address) {
      console.log("Address field is empty");
    }
  };
  const validateEmail = () => {
    if (!Email) {
      console.log("Email field is empty");
    }
  };
  const validateItems = () => {
    if (!Items) {
      console.log("Items field is empty");
    }
  };
  const validateQuantity = () => {
    if (!Quantity) {
      console.log("Quantity field is empty");
    }
  };
  const validatePhone = () => {
    if (!Phone) {
      console.log("Phone field is empty");
    }
  };


const validateDonationForm = () => {
  if (!Donator) {
    errors.DonatorError = "Donator field cannot be empty";
    console.log("Donator field cannot be empty");
    return false;
  }
  if (!Address) {
    errors.AddressError = "Address field cannot be empty";
    console.log("Address field cannot be empty");
    return false;
  }
  if (!Email) {
    errors.EmailError = "Email field cannot be empty";
    console.log("Email field cannot be empty");
    return false;
  }
  if (!Items) {
    errors.ItemsError = "Items field cannot be empty";
    console.log("Items field cannot be empty");
    return false;
  }
  if (!Quantity) {
    errors.QuantityError = "Quantity field cannot be empty";
    console.log("Quantity field cannot be empty");
    return false;
  }
  if (!Phone) {
    errors.PhoneError = "Phone field cannot be empty";
    console.log("Phone field cannot be empty");
    return false;
  }
    return errors;
  };


  const sendDonationData = () => {
    const validationResult = validateDonationForm();
    if (validationResult == false) {
      alert("form is incomplete");
    } else {
      addDonationDetails();
    }
  };


  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4" 
         style={{
           marginTop: 50,
           color:'black',
           fontSize: "2.5rem",
           fontWeight: "600",
         }}>
           Add Donation
      </Typography>
      <FormControl>
        <InputLabel>Donator</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Donator" id="donator" type="text" value={Donator}  placeholder={errors.DonatorError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Email" id="email" type="email" value={Email}  placeholder={errors.EmailError}required/>
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Address" id="address" type="text" value={Address} placeholder={errors.AddressError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Item</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Items" id="items" type="text" value={Items}  placeholder={errors.ItemsError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Quantity</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Quantity" id="quantity" type="number" value={Quantity} placeholder={errors.QuantityError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Phone" id="phone" value={Phone} type="text" placeholder={errors.PhoneError} required/>
      </FormControl>
      <Button variant="contained" color="primary" value="Submit" onClick={() => sendDonationData()} style={{ marginBottom: 200 }}> add donation </Button>
    </FormGroup>
  );
};
export default AddDonation;
