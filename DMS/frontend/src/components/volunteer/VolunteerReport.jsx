import React, { useEffect, useState } from "react";
import "../../css/volunteer.css";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import { deleteVolunteer, getVolunteer } from "../../services/volunteer.api.js";
import { colors } from "@material-ui/core";


const VolunteerAdminView = () => {
  const [volunteer, setVolunteer] = useState([]);

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
    getAllVolunteer();
  }, []);

  const getAllVolunteer = async () => {
    const response = await getVolunteer();
    console.log(response.data);
    setVolunteer(response.data);
  };

  const deleteVolunteerData = async (id) => {
    await deleteVolunteer(id);
    getAllVolunteer();
  };

  const columns = [
    {dataField:'id', text: 'id'},
    {dataField:'First_name', text: 'First_name', sort:true, filter:textFilter()},
    {dataField:'Last_name', text: 'Last_name', sort:true, filter:textFilter()},
    {dataField:'Education', text: 'Education', sort:true, filter:textFilter()},
    {dataField:'Area_of_expertise', text: 'Area_of_expertise', sort:true, filter:textFilter()},
    {dataField:'Email', text: 'Email', sort:true, filter:textFilter()},
    {dataField:'Address', text: 'Address', sort:true, filter:textFilter()},
    {dataField:'Phone', text: 'Phone', sort:true, filter:textFilter()}
    
 ]

  return (
   <div>
      <h2 className="VolunteerHeading" style={{ marginTop: 50 }}> Volunteer Management Report </h2>
<ToolkitProvider
     bootstrap4
     keyField='id'
     data={volunteer}
     columns={columns}
     ExportCSV
     >
       {
         props => (
           <React.Fragment>
           <MyExportCSV {...props.csvProps} />
          <BootstrapTable  
              // data={volunteer}
              //keyField='id'  
              //columns={columns}
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
export default VolunteerAdminView;