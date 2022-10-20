import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x w-100">
          <footer className="text-center text-lg-start text-white bg-dark">
            <div className="container">
              <section>
                <div className="row d-flex align-items-center">
                  <div className="col-md-7 col-lg-8 text-center text-md-start">
                    <div className="p-3">
                      © 2022 Copyright:{" "}
                      <a
                        className="text-white"
                        target="blank"
                        href="https://jayanugie.github.io"
                      >
                        jayanugie
                      </a>
                    </div>
                  </div>

                  <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <a
                      href="https://github.com/jayanugie"
                      target="blank"
                      className="btn btn-outline-light btn-floating m-1"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faGit} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/jayanugie/"
                      target="blank"
                      className="btn btn-outline-light btn-floating m-1"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
