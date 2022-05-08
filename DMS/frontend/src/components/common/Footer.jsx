import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../css/common_styles.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-aos="slide-up">
        <div className="container">
          <div className="row ">
            <div className="col"></div>
            <div className="col-sm-12 col-md-9">
              <p>
                Disaster Management Center <br />
                <small>
                  Addrress: Vidya Mawatha, Colombo, Sri Lanaka <br />
                </small>
                <small>
                  {" "}
                  E-Mail: dmc@gmail.com
                  <br />
                </small>
                <small>
                  {" "}
                  Telephone: +941153331513
                  <br />
                </small>
              </p>
            </div>

            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-9 socialwrapper">
              <a href="#">
                <i className="fa fa-facebook-official fa-2x"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square fa-2x"></i>
              </a>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
