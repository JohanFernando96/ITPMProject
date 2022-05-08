import { useEffect, useState } from "react";
import "../../css/inventories.css";
import {
  getInventories,
  deleteInventory,
} from "../../services/inventories.api";
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
//import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyle = makeStyles({

  table: {
    width: "90%",
    margin: "50px 100px 200px 50px",
  },
  thead: {
    "& > *": {
      background: "rgb(0, 125, 254)",
      color: "#FFFFFF",
      fontSize: 15,
      border:'2px solid #CCCC'
    },
  },
  row: {
    "& > *": {
      fontSize: 15,
      border:'2px solid #CCCC'

    },
  },
});

const InventoriesAdminView = () => {
  const [inventories, setInventories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyle();

  useEffect(() => {
    getAllInventories();
  }, []);

  const getAllInventories = async () => {
    const response = await getInventories();
    console.log(response.data);
    setInventories(response.data);
  };

  const deleteInventoryData = async (id) => {
    if (window.confirm("Delete Inventory Record?")) {
      const response = await deleteInventory(id);
      getAllInventories();
    }
  };

  return (
    <div class="main">
      <h2 className="InventoryHeading"> Inventories</h2>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{
          borderBlock: null,
          paddingLeft: 10,
          marginLeft: 50,
          marginTop: 20,
          border: '2px solid #007dfe',
          borderRadius: '24px',
          height: '43px',
        }}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="table-div">
        <Table id="tableinv" className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell  className={classes.rows}>Organization</TableCell>
              <TableCell className={classes.rows}>ID</TableCell>
              <TableCell className={classes.rows}>Stretcher</TableCell>
              <TableCell className={classes.rows}>Life jacket</TableCell>
              <TableCell className={classes.rows}>First Aid</TableCell>
              <TableCell className={classes.rows}>Bucket</TableCell>
              <TableCell className={classes.rows}>Gloves</TableCell>
              <TableCell className={classes.rows}>Torch Light</TableCell>
              <TableCell className={classes.rows}>Safety Helmet</TableCell>
              <TableCell className={classes.rows}>Readymade Food</TableCell>
              <TableCell className={classes.rows}>Others</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventories
              .filter((inventorySearch) => {
                if (searchTerm === "") {
                  return inventorySearch;
                } else if (
                  inventorySearch.Organization.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  )
                ) {
                  return inventorySearch;
                }
              })

              .map((inventory) => (
                <TableRow className={classes.row} key={inventory._id}>
                  <TableCell>{inventory._id}</TableCell>
                  <TableCell
                    // style={{ }}
                    // className="fix"
                  >
                    {inventory.Organization}
                  </TableCell>
                  <TableCell>{inventory.stretcher}</TableCell>
                  <TableCell>{inventory.lifejacket}</TableCell>
                  <TableCell>{inventory.firstaid}</TableCell>
                  <TableCell>{inventory.bucket}</TableCell>
                  <TableCell>{inventory.gloves}</TableCell>
                  <TableCell>{inventory.torchlight}</TableCell>
                  <TableCell>{inventory.safetyhelmet}</TableCell>
                  <TableCell>{inventory.readymadefood}</TableCell>
                  <TableCell>{inventory.others}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/Inventories/edit/${inventory._id}`}
                    >
                      <EditIcon/>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteInventoryData(inventory._id)}
                    >
                      <DeleteIcon/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 120, marginBottom: 30 }}
        component={Link}
        to={`/Inventories/add`}
      >
        Add Inventory{" "}
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 50, marginBottom: 30 }}
        component={Link}
        to={`/Inventories/report`}
      >
        report{" "}
      </Button>
    </div>
  );
};

export default InventoriesAdminView;
