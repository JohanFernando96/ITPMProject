import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { getReports } from "../../services/reports.api";
import AOS from "aos";
//componentes imports
import ReportDetail from "./ReportDetail";
import ReportEdit from "./ReportEdit";

function Reports() {
  // state for for search bar
  const [searchTerm, setSearchTerm] = useState("");

  // testing
  let { path, url } = useRouteMatch();

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

  // aos
  // aos
  AOS.init({
    duration: 1600,
  });
  AOS.refresh();

  // useEffect
  useEffect(() => {
    getAllReports();
  }, []); // [] because we only want to return once // because useEffect runs after each update

  const getAllReports = async () => {
    const response = await getReports();
    console.log(response.data);
    setReports(response.data); // updating state using the reposone from get method
  };

  return (
    <React.Fragment>
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-9">
            <h4>Report and Publications</h4>
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
            <div className="report_body">
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th scope="col">Reports </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
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
                        <a>
                          <td>{report.topic.replace(/_/g, " ")}</td>
                        </a>

                        <td>
                          <Link
                            to={`/reports/Report/ReportDetail/${report._id}`}
                          >
                            <button className="btn btn-sm btn-primary">
                              Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Reports;
