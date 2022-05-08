import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

import { addReport } from "../../services/reports.api.js";
import { getDisasters } from "../../services/disaster.api.js";

function ReportCreate() {
  // aos
  AOS.init({
    duration: 1600,
  });
  AOS.refresh();

  //state for report collection
  const [reports, setReports] = useState([
    {
      id: "",
      date: "",
      topic: "",
      category: "",
      content: "",
    },
  ]);
  // object destructuring
  const { date, topic, category, content } = reports;

  // use history to be able to go back to the page
  const history = useHistory();

  // state for disaster collection
  const [disasters, setDisaster] = useState([
    {
      date: "",
      name: "",
    },
  ]);

  const errors = {
    topicError: "",
    contentError: "",
    categoryError: "",
  };

  // loading disaster details
  useEffect(() => {
    getAllDisastersDetail();
  }, []);

  const getAllDisastersDetail = async () => {
    const response = await getDisasters();
    console.log(response.data);
    setDisaster(response.data);
  };

  // onChangeHandler
  const changeHandler = (e) => {
    setReports({ ...reports, [e.target.name]: e.target.value }); // key : value
    console.log(reports);
  };
  // data will be post when submit is clicked
  const addReportDetails = async () => {
    await addReport(reports);
    history.push("./ReportAdmin");
  };

  // validation of the form
  const validateTopic = () => {
    if (typeof topic == "undefined") {
      console.log("Please select a topic");
    }
  };
  const validateCategory = () => {
    if (typeof category == "undefined") {
      console.log("Please select a option from category");
      //setErrors;
    }
  };
  const validateContent = () => {
    if (!content) {
      console.log("Content of the report cannot be empty");
    }
  };
  const validateReportForm = () => {
    if (typeof topic == "undefined" || topic == "") {
      errors.topicError = "Please select a topic";
      console.log("Please select a topic");
      return false;
    }
    if (typeof category == "undefined" || category == "") {
      errors.categoryError = "Please select a option from category";
      console.log("Please select a option from category");
      return false;
    }
    if (!content) {
      errors.contentError = "Content of the report cannot be empty";
      console.log("Content of the report cannot be empty");
      return false;
    }
    return errors;
  };

  // after validation -- send data to backend

  const sendData = () => {
    const validationResult = validateReportForm();
    if (validationResult == false) {
      alert("form is incomplete");
    } else {
      addReportDetails();
    }
  };

  return (
    <div className="container">
      <div className="row report_body">
        <div className="col"></div>
        <form data-aos="fade-up-right">
          <div className="form-group">
            <label for="topic">
              Select the disaster to generate the report
            </label>
            <select
              placeholder={errors.topicError}
              className="form-control"
              onChange={changeHandler}
              name="topic"
              value={topic}
            >
              <option>Choose..</option>
              {disasters.map((disaster) => (
                <option> {disaster.name}</option>
              ))}
              ;
            </select>
          </div>
          <div className="form-group">
            <label for="date">Select date:</label>
            <input
              onChange={changeHandler}
              type="date"
              name="date"
              value={date}
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
              <option>Choose..</option>
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
              className="form-control textarea_report"
              onChange={changeHandler}
              placeholder={errors.contentError}
              name="content"
              value={content}
              rows="10"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success btn_publish"
            onClick={() => sendData()}
          >
            Publish the report
          </button>
        </form>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ReportCreate;
