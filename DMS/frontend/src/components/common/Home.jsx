import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutusImg from "../../images/1.jpg";
import missionImg from "../../images/2.jpg";
import visionImg from "../../images/3.jpg";

function Home() {
  AOS.init({
    duration: 1600,
  });
  AOS.refresh();

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col"></div>
          <div className="col-sm12 col-md-9 col-lg-9">
            <h3>Disaster Management Center</h3>
          </div>
          <div className="col"></div>
        </div>
        <hr />

        <div className="row mt-5" data-aos="fade-left">
          <div className="col-sm-12 col-md-6 " data-aos="fade-up-right">
            <img
              src={aboutusImg}
              className="homepage_images"
              alt="img about us"
            />
          </div>
          <div className="col-sm-12 col-md-6 homepage_content_div ">
            <p className="about_content" data-aos="fade-down">
              <h3 classname="mb-2">About us</h3>
              <br />
              Disaster Management System is a national level
              governmental, non-profit making, independent organization
              working in all districts of Sri Lanka. It is lead and managed by youth committed to the
              development of Red cross region of Sri Lanka.
            </p>
          </div>
        </div>
        <hr />

        <div className="row mt-5 mb-2">
          <div
            className="col-sm-12 col-md-6 homepage_content_div"
            data-aos="zoom-in"
          >
            <p className="about_content">
              <h3 classname="mb-2">Mission </h3>
              <br />
              Development and growth of society through resource, skill, and
              information transfer to right holders and sensitization of
              stakeholders and duty bearers in favour of peace, prosperous and
              just Sri Lanka.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 " data-aos="zoom-out-down">
            <img
              src={missionImg}
              className="homepage_images"
              alt="img about us"
            />
          </div>
        </div>

        <hr />
        <div className="row mt-5 mb-2">
          <div className="col-sm-12 col-md-6 " data-aos="zoom-out-down">
            <img
              src={visionImg}
              className="homepage_images"
              alt="img about us"
            />
          </div>
          <div
            className="col-sm-12 col-md-6 homepage_content_div"
            data-aos="zoom-in"
          >
            <p className="about_content">
              <h3 classname="mb-2">Vision</h3>
              <br />
              A peaceful, prosperous and just Sri Lanka where everyone
              irrespective of caste, colour, creed, ethnicity, faith enjoys and
              exercise rights without fear or favour for his and her overall
              development.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Home;
