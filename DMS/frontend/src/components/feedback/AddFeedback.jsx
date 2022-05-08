import React, { useState } from "react";
import {  FormGroup,  FormControl,  Input,  InputLabel,  Button,  Typography,  makeStyles,} from "@material-ui/core";
import { addFeedback } from "../../services/feedbacks.api.js";
import { useHistory } from "react-router-dom";

//takes the values from the db object
const initialValue = {
  Name: "",
  Email: "",
  Phone: "",
  Feedback :""
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


const AddFeedback = () => {
  const [feedback, setFeedback] = useState(initialValue);
  const { Name, Email, Phone, Feedback } = feedback;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const addFeedbackDetails = async () => {
    await addFeedback(feedback);
    history.push("/Feedback");
  };

  const errors = {
    NameError: "",
    EmailError: "",
    PhoneError: "",
    FeedbackError: ""
  };
  


   // form validation
   const validateName = () => {
    if (!Name) {
      console.log("Name field is empty");
    }
  };
  const validateEmail = () => {
    if (!Email) {
      console.log("Email field is empty");
    }
  };
  const validatePhone = () => {
    if (!Phone) {
      console.log("Phone No field is empty");
    }
  };
  const validateFeedback = () => {
    if (!Feedback) {
      console.log("Feedback field is empty");
    }
  };
 


const validateFeedbackForm = () => {
  if (!Name) {
    errors.NameError = "Name field cannot be empty";
    console.log("Name field cannot be empty");
    return false;
  }

  if (!Email) {
    errors.EmailError = "Email field cannot be empty";
    console.log("Email field cannot be empty");
    return false;
  }
  
  if (!Phone) {
    errors.PhoneError = "Phone field cannot be empty";
    console.log("Phone field cannot be empty");
    return false;
  }

  if (!Feedback) {
    errors.FeedbackError = "Feedback field cannot be empty";
    console.log("Feedback field cannot be empty");
    return false;
  }
    return errors;
  };


  const sendFeedbackData = () => {
    const validationResult = validateFeedbackForm();
    if (validationResult == false) {
      alert("form is incomplete");
    } else {
      addFeedbackDetails();
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
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Name" id="name" type="text" value={Name}  placeholder={errors.NameError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Email" id="email" type="email" value={Email}  placeholder={errors.EmailError}required/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Phone" id="phone" value={Phone} type="text" placeholder={errors.PhoneError} required/>
      </FormControl>
      <FormControl>
        <InputLabel>Feedback</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Feedback" id="feedback" value={Feedback} type="text" placeholder={errors.FeedbackError} required/>
      </FormControl>
      <Button variant="contained" color="primary" value="Submit" onClick={() => sendFeedbackData()} style={{ marginBottom: 200 }}> add feedback </Button>
    </FormGroup>
  );
};
export default AddFeedback;
