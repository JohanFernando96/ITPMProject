import react, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { editAdmin, getadmin } from "../../services/Admin.api.js";
import { useHistory, useParams } from "react-router-dom";

//takes the values from the db object
const initialValue = {
  AdminUsername: "",
  AdminFirstname: "",
  AdminLastname: "",
  AdminEmail: "",
  Privillages: "",
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

const Editadmin = () => {
  const [admin, setadmin] = useState(initialValue);
  const {
    AdminUsername,
    AdminFirstname,
    AdminLastname,
    AdminEmail,
    Privillages,
  } = admin;
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    loadAdminDetails();
  }, []);

  const loadAdminDetails = async () => {
    const response = await getadmin(id);
    setadmin(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };

  const editadminDetails = async () => {
    await editAdmin(id, admin);
    history.push("/admin");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h6">Update Admin</Typography>
      <FormControl>
        <InputLabel>AdminUsername</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="AdminUsername"
          id="AdminUsername"
          type="text"
          value={AdminUsername}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>AdminFirstname</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="AdminFirstname"
          id="AdminFirstname"
          type="text"
          value={AdminFirstname}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>AdminLastname</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="AdminLastname"
          id="AdminLastname"
          type="text"
          value={AdminLastname}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>AdminEmail</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="AdminEmail"
          id="AdminEmail"
          type="email"
          value={AdminEmail}
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel>Privillages</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Privillages"
          id="Privillages"
          type="text"
          value={Privillages}
          required
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editadminDetails()}
      >
        UpdateAdminDeatails
      </Button>
    </FormGroup>
  );
};
export default Editadmin;
