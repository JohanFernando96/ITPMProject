import React, { useEffect, useState } from "react";
import "../../css/donations.css";
import { getDonations, deleteDonation } from "../../services/donations.api.js";
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

const DonationReport = () => {
  const [donations, setDonations] = useState([]);

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
     {dataField:'id', text: 'Id' , sort:true, filter:textFilter()},
     {dataField:'Donator', text: 'Donator', sort:true, filter:textFilter()},
     {dataField:'Email', text: 'Email', sort:true, filter:textFilter()},
     {dataField:'Address', text: 'Address', sort:true, filter:textFilter()},
     {dataField:'Items', text: 'Items', sort:true, filter:textFilter()},
     {dataField:'Quantity', text: 'Quantity', sort:true,filter:textFilter()},
     {dataField:'Phone', text: 'Phone', sort:true,filter:textFilter()}
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
    getAllDonations();
  }, []);

  const getAllDonations = async () => {
    const response = await getDonations();
    console.log(response.data);
    setDonations(response.data);
  };


  return (
   <div>
      <h2 className="DonationsHeading" 
         style={{ 
           marginTop: 50,
           color:'#000000',
           fontSize: "2.5rem",
           fontWeight: "500",
         }}> 
         Generate Donation Report </h2>
<ToolkitProvider
     bootstrap4
     keyField='id'
     data={donations}
     columns={columns}
     ExportCSV
     >
       {
         props => (
           <React.Fragment>
           <MyExportCSV {...props.csvProps} />
          <BootstrapTable 
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
  

export default DonationReport;