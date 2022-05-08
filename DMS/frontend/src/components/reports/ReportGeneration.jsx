import React, { useState, useEffect } from "react";

import { getReports } from "../../services/reports.api";

// extenal dependency
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

//only way to print functional component using react-to-print
const ReportGeneration = React.forwardRef((props, ref) => {
  //state
  const [reports, setReports] = useState([
    {
      _id: "",
      date: "",
      topic: "",
      category: "",
      content: "",
    },
  ]);

  // useEffect
  useEffect(() => {
    getAllReports();
  }, []); // [] because we only want to return once // because useEffect runs after each update

  const getAllReports = async () => {
    const response = await getReports();
    console.log(response.data);
    // formating the date column of the data received
    for (let eachReport in response.data) {
      response.data[eachReport].date =
        typeof response.data[eachReport].date == "string"
          ? response.data[eachReport].date.split("T")[0]
          : response.data[eachReport].date;
    }

    setReports(response.data); // updating state using the reposone from get method
  };

  const columns = [
    {
      dataField: "topic",
      text: "Topic:",
      filter: textFilter(),
    },
    { dataField: "category", text: "Category:", filter: textFilter() },
    { dataField: "date", text: "Date:", filter: textFilter() },
  ];

  return (
    <div className="container overflow-auto">
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-11 report_generation_table" ref={ref}>
          <BootstrapTable
            keyField="_id"
            data={reports}
            columns={columns}
            striped
            hover
            condensed
            filter={filterFactory()}
          />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
});

export default ReportGeneration;
