import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// css files
import "./css/common_styles.css";
import "./css/reports.css";
import "./css/donations.css";
import "./css/volunteer.css";
//import "./css/feedbacks.css";
//import "./css/admin.css";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
