import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getReports } from "../../services/reports.api.js";
import AOS from "aos";

const initialState = {
  _id: "",
  date: "",
  topic: "",
  category: "",
  content: "",
};
function ReportDetail() {
  const [reports, setReports] = useState(initialState);

  const { date, topic, category, content } = reports; // object destructuring
  const { id } = useParams(); // use params is used to check parameters in url
  const history = useHistory();
  // aos
  AOS.init({
    duration: 1600,
  });
  AOS.refresh();

  // setting state
  useEffect(() => {
    loadReportData(id);
    console.log(`state is set as : ${reports.topic}`);
  }, []); // if you dont write [] then i will run continuously

  const loadReportData = async (id) => {
    const response = await getReports(id);
    console.log(response.data);

    setReports(response.data);
  };

  return (
    <div className="container" data-aos="zoom-in">
      <div className="row report_body">
        <div className="col"></div>
        <div className="col-sm-12 col-md-9">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Topic :</td>
                <td>{topic}</td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>{category}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{date}</td>
              </tr>
              <tr>
                <td>Report:</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
      <div className="row ">
        <div className="col"></div>
        <div className="col-sm-12 col-md-9">{content}</div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ReportDetail;
