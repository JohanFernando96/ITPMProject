import react, { useState, useEffect } from "react";
import {  FormGroup,  FormControl,  Input,  InputLabel,  Button,  Typography,  makeStyles,} from "@material-ui/core";
import { editFeedback, getFeedbacks } from "../../services/feedbacks.api.js";
import { useHistory, useParams } from "react-router-dom";

//takes the values from the db object
const initialValue = {
  Name: "",
  Email: "",
  Phone: "",
  Feedback: "",
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

const EditFeedback = () => {
  const [feedback, setFeedback] = useState(initialValue);
  const { Name, Email, Phone, Feedback } = feedback;
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    loadFeedbackDetails();
  }, []);

  const loadFeedbackDetails = async () => {
    const response = await getFeedbacks(id);
    setFeedback(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const editFeedbackDetails = async () => {
    await editFeedback(id, feedback);
    history.push("/Feedbacks");
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
            Update Feedback
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Name"
          id="name"
          type="text"
          value={Name}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Email"
          id="email"
          type="email"
          value={Email}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Phone"
          id="phone"
          type="text "
          value={Phone}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Feedback</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)} 
          name="Feedback" 
          id="feedback"
          value={Feedback}
          type="text" 
          required
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editFeedbackDetails()}
      >
        Update Feedback
      </Button>
    </FormGroup>
  );
};
export default EditFeedback;
