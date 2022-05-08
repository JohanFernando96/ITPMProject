import react, { useState, useEffect } from "react";
import {  FormGroup,  FormControl,  Input,  InputLabel,  Button,  Typography,  makeStyles,} from "@material-ui/core";
import { editDonation, getDonations } from "../../services/donations.api.js";
import { useHistory, useParams } from "react-router-dom";

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

const EditDonation = () => {
  const [donation, setDonation] = useState(initialValue);
  const { Donator, Email, Address, Items, Quantity, Phone } = donation;
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    loadDonationDetails();
  }, []);

  const loadDonationDetails = async () => {
    const response = await getDonations(id);
    setDonation(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const editDonationDetails = async () => {
    await editDonation(id, donation);
    history.push("/Donations");
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
            Update Donation
      </Typography>
      <FormControl>
        <InputLabel>Donator</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Donator"
          id="donator"
          type="text"
          value={Donator}
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
        <InputLabel>Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Address"
          id="address"
          type="text"
          value={Address}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Item</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Items"
          id="items"
          type="text"
          value={Items}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Quantity</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Quantity"
          id="quantity"
          type="number"
          value={Quantity}
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => editDonationDetails()}
      >
        Update donation
      </Button>
    </FormGroup>
  );
};
export default EditDonation;
