import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { addadmin } from "../../services/Admin.api.js";
import { useHistory } from "react-router-dom";

//takes the values from the db object
const initialValue = {
  First_name: "",
  Last_name: "",
  Email: "",
  Password: "",
  Adminusername: "",
  reenterPassword: "",
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

const AdminRegistration = () => {
  const [admin, setadmin] = useState(initialValue);
  const {
    First_name,
    Last_name,
    Email,
    Password,
    Adminusername,
    reenterPassword,
  } = admin;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };

  const addadminDetails = async () => {
    await addadmin(admin);
    history.push("/admin");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h6">AdminRegistration</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="First_name"
          value={First_name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Last_name"
          value={Last_name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Email" value={Email} />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Password"
          value={Password}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Adminusername</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Adminusername"
          value={Adminusername}
        />
      </FormControl>
      <FormControl>
        <InputLabel>re-enterPassword</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="re-enterPassword"
          value={Password}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addadminDetails()}
      >
        REGISTER
      </Button>
    </FormGroup>
  );
};
export default AdminRegistration;
