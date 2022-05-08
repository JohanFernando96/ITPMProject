import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editReport, getReports } from "../../services/reports.api.js";
import { getDisasters } from "../../services/disaster.api.js";

const initialState = {
  _id: "",
  date: "",
  topic: "",
  category: "",
  content: "",
};

function ReportEdit() {
  const [reports, setReports] = useState(initialState);

  const { date, topic, category, content } = reports; // object destructuring
  const { id } = useParams(); // use params is used to check parameters in url
  const history = useHistory();

  // state for disaster collection
  const [disasters, setDisaster] = useState([
    {
      date: "",
      name: "",
    },
  ]);

  // loading disaster details
  useEffect(() => {
    getAllDisastersDetail();
  }, []);

  const getAllDisastersDetail = async () => {
    const response = await getDisasters();
    console.log(response.data);
    setDisaster(response.data);
  };

  // now need to load report data using the id

  useEffect(() => {
    loadReportData(id);
  }, []); // if you dont write [] then i will run continuously

  const loadReportData = async (id) => {
    const response = await getReports(id);
    console.log(response.data);
    setReports(response.data);
  };
  // onChangeHandler
  const changeHandler = (e) => {
    setReports({ ...reports, [e.target.name]: e.target.value }); // key : value
    console.log(reports);
  };

  const editReportDetail = async () => {
    await editReport(id, reports);
    history.push("/reports/Report/ReportAdmin"); // history.push will load the page when this function ends
  };

  return (
    <div className="container">
      <div className="row report_body">
        <div className="col"></div>
        <form>
          <div className="form-group">
            <label for="topic">
              Select the disaster to generate the report
            </label>
            <select
              className="form-control"
              onChange={changeHandler}
              name="topic"
              value={topic}
            >
              {disasters.map((disaster) => (
                <option> {disaster.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label for="date">Select date:</label>
            <input
              onChange={changeHandler}
              type="date"
              name="date"
              value={date}
              placeholder={`${date}`}
            />
          </div>

          <div className="form-group">
            <label for="category">Category of disaster</label>
            <select
              className="form-control"
              onChange={changeHandler}
              name="category"
              value={category}
            >
              <option>Earthquake</option>
              <option>Flood</option>
              <option>Hurricane</option>
              <option>Fire</option>
              <option>other</option>
            </select>
          </div>
          <div className="form-group">
            <label for="disaster_content">Content of report</label>
            <textarea
              className="form-control "
              onChange={changeHandler}
              name="content"
              value={content}
              rows="10"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success btn_publish"
            onClick={() => editReportDetail()}
          >
            Confirm Edit
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ReportEdit;
