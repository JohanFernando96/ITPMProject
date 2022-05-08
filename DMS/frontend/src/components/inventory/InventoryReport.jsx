import React, { useEffect, useState } from "react";
import "../../css/inventories.css";
import { getInventories, deleteInventory } from "../../services/inventories.api";
import {  TableCell,  TableRow,  Table,  TableHead,  TableBody,  Button,  makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import ReactToPrint from "react-to-print";



const InventoryReport = () => {
  const [inventories, setInventories] = useState([]);

  const { ExportCSVButton } = CSVExport;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
         <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>
    );
  };


  const columns = [
     {dataField:'id', text: 'Id', sort:true, filter:textFilter()},
     {dataField:'Organization', text: 'Organization', sort:true, filter:textFilter()},
     {dataField:'stretcher', text: 'stretcher', sort:true, filter:textFilter()},
     {dataField:'lifejacket', text: 'lifejacket', sort:true, filter:textFilter()},
     {dataField:'firstaid', text: 'firstaid', sort:true, filter:textFilter()},
     {dataField:'bucket', text: 'bucket', sort:true,filter:textFilter()},
     {dataField:'gloves', text: 'gloves', sort:true, filter:textFilter()},
     {dataField:'torchlight', text: 'torchlight', sort:true,filter:textFilter()},
     {dataField:'safetyhelmet', text: 'safetyhelmet', sort:true,filter:textFilter()},
     {dataField:'readymade food', text: 'readymade food', sort:true,filter:textFilter()},
     {dataField:'others', text: 'others', sort:true,filter:textFilter()}
     
  ]

  const pagination = paginationFactory({
    page:1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page, sizePerPage){
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }

  });
  useEffect(() => {
    getAllInventories();
  }, []);

  const getAllInventories = async () => {
    const response = await getInventories();
    console.log(response.data);
    setInventories(response.data);
  };

  return (
   <div>
      <h2 className="InventoryHeading" style={{ marginTop: 50 }}> Inventories </h2>
     
<ToolkitProvider
     bootstrap4
     keyField='id'
     
     data={inventories}
     columns={columns}
     ExportCSV
     >
       {
         props => (
           <React.Fragment>
           <MyExportCSV {...props.csvProps} />
          <BootstrapTable style={{overflow: "auto", border: "none",
                              borderCollapse: "separate",
                              borderSpacing:" 0"}} className="fixreport"
              //bootstrap4 
              //keyField='id' 
              //columns={columns} 
              // data={inventories} 
          pagination={pagination}
          filter={filterFactory()}
          {...props.baseProps}
          />
          </React.Fragment>
         )
       }
    </ToolkitProvider>
    </div>
  
  
  );
};
export default InventoryReport;