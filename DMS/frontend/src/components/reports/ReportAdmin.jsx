import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import ReportCreate from "./ReportCreate";
import { deleteReport, getReports } from "../../services/reports.api";

import AOS from "aos";
import "aos/dist/aos.css";

function ReportAdmin() {
  AOS.init({
    duration: 1600,
  });
  AOS.refresh();

  //state for search bar
  const [searchTerm, setSearchTerm] = useState("");
  //state
  const [reports, setReports] = useState([
    {
      _id: "",
      date: "",
      topic: "",
      category: "",
    },
  ]);

  // useEffect
  useEffect(() => {
    getAllReports();
  }, []); // [] because we only want to return once // because useEffect runs after each update

  const getAllReports = async () => {
    const response = await getReports();
    console.log(response.data);
    setReports(response.data); // updating state using the reposone from get method
  };

  const deleteReportData = async (id) => {
    if (window.confirm("Confirm delete?")) {
      const response = await deleteReport(id);
      getAllReports();
    }
  };

  return (
    <div className="container">
      <div className="row report_body">
        <div className="col"></div>
        <div className="col-sm-12 col-md-9">
          <Link to="/reports/Report/ReportCreate">
            <button type="button" className="btn btn-success m-3">
              Publish a report
            </button>
          </Link>
          <Link to="/reports/Report/PrintReport">
            <button type="button" className="btn btn-success">
              Print Report
            </button>
          </Link>

          <hr />
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline ">
              <input
                className="form-control mr-sm-2 searchbar_report"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </form>
          </nav>
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Reports </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody data-aos="zoom-in">
              {reports
                .filter((reportTemp) => {
                  if (searchTerm == "") {
                    return reportTemp;
                  } else if (
                    reportTemp.topic
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return reportTemp;
                  }
                })
                .map((report) => (
                  <tr>
                    <td>
                      <a>{report.topic.replace(/_/g, " ")}</a>
                    </td>
                    <td>{report.category}</td>
                    <td>
                      {typeof report.date == "string"
                        ? report.date.split("T")[0]
                        : report.date}
                    </td>

                    <td>
                      <Link
                        to={`/reports/Report/ReportEdit/edit/${report._id}`}
                      >
                        <button className="btn btn-info btn-sm">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteReportData(report._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ReportAdmin;
