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

const useStyle = makeStyles({
  table: {
    width: "90%",
    borderRadius: "10px",
    margin: "50px 100px 200px 50px",
  },
  thead: {
    "& > *": {
      background: "rgb(0, 125, 254)",
      color: "#FFFFFF",
      fontSize: 15,
      border: "2px solid #CCCC",
    },
  },
  row: {
    "& > *": {
      fontSize: 15,
      border: "2px solid #CCCC",
    },
  },
});
const InventoriesUserView = () => {
  const [Inventories, setInventories] = useState([]);
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

  return (
    <div class="main">
      <h2
        className="InventoryHeading"
        style={{
          color: "#000000",
          marginTop: 50,
          fontSize: "2.5rem",
          fontWeight: "600",
        }}
      >
        {" "}
        INVENTORIES{" "}
      </h2>
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
              <TableCell>ID</TableCell>
              <TableCell>Organization</TableCell>
              <TableCell>Stretcher</TableCell>
              <TableCell>Life jacket</TableCell>
              <TableCell>First Aid</TableCell>
              <TableCell>Bucket</TableCell>
              <TableCell>Gloves</TableCell>
              <TableCell>Torch Light</TableCell>
              <TableCell>Safety Helmet</TableCell>
              <TableCell>Readymade Food</TableCell>
              <TableCell>Others</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Inventories.filter((inventorySearch) => {
              if (searchTerm === "") {
                return inventorySearch;
              } else if (
                inventorySearch.Organization.toLowerCase().includes(
                  searchTerm.toLowerCase()
                )
              ) {
                return inventorySearch;
              }
            }).map((inventory) => (
              <TableRow className={classes.row} key={inventory._id}>
                <TableCell>{inventory._id}</TableCell>
                <TableCell>{inventory.Organization}</TableCell>
                <TableCell>{inventory.stretcher}</TableCell>
                <TableCell>{inventory.lifejacket}</TableCell>
                <TableCell>{inventory.firstaid}</TableCell>
                <TableCell>{inventory.bucket}</TableCell>
                <TableCell>{inventory.gloves}</TableCell>
                <TableCell>{inventory.torchlight}</TableCell>
                <TableCell>{inventory.safetyhelmet}</TableCell>
                <TableCell>{inventory.readymadefood}</TableCell>
                <TableCell>{inventory.others}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 120, marginBottom: 30 }}
          component={Link}
          to={`/Inventories/add`}
        >
          Register as a Inventories{" "}
        </Button>
      </div>
    </div>
  );
};

export default InventoriesUserView;
