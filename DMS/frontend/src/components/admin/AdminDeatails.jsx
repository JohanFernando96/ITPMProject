import react, { useEffect, useState } from "react";
import { getadmin, deleteadmin } from "../../services/Admin.api.js";
import {
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

const Admindeatails = () => {
  const [admin, setadmin] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAlladmin();
  }, []);

  const getAlladmin = async () => {
    const response = await getadmin();
    console.log(response.data);
    setadmin(response.data);
  };

  const deleteadminData = async (id) => {
    await deleteadminData(id);
    getAlladmin();
  };

  return (
    <div class="main">
      <h2 className="Admin DeatailsHeading"> Admin Deatails </h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Adminusername</TableCell>
            <TableCell>AdminFirstname</TableCell>
            <TableCell>AdminLastname</TableCell>
            <TableCell>AdminEmail</TableCell>
            <TableCell>Privillages</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admin.map((admin) => (
            <TableRow className={classes.row} key={admin._id}>
              <TableCell>{admin._id}</TableCell>
              <TableCell>{admin.AdminFirstname}</TableCell>
              <TableCell>{admin.AdminLastname}</TableCell>
              <TableCell>{admin.Email}</TableCell>
              <TableCell>{admin.Privillages}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/admin/edit/${admin._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteadminData(admin._id)}
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
        style={{ marginLeft: 120, marginBottom: 30 }}
        component={Link}
        to={`/admin/add`}
      >
        add{" "}
      </Button>
    </div>
  );
};

export default Admindeatails;
