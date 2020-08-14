import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../LbtcCarousel/lbtccarousel.min.scss";

function EventFunding() {
  return (
    <div className="App">
      <section>
        <div className="block remove-bottom">
          <div
            className="fixed-bg shp-bg back-post-rgttp"
            style={{
              backgroundImage: "url(../../assets/images/bg-shp3.png)",
            }}
          ></div>
          <div className="container">
            <div className="feat-wrp2">
              <div className="row align-items-center">
                <div className="col-md-5 col-sm-6 col-lg-5">
                  <div className="feat-cap">
                    <h2 itemprop="headline">
                      Let's Be The Change{" "}
                      <strong>One Mission <br />Clean Bengaluru</strong>
                    </h2>
                    <p itemprop="description">
                      Want to be a part of the change?
                    </p>
                    <p itemprop="description">
                      Join LBTC as a volunteer and contribute to the society.
                    </p>
                    <Link
                      to="/form"
                      className="thm-btn"
                      title=""
                      itemprop="url" style={{ textDecoration: "none", marginTop: "1rem"}}
                    >
                      Sign Me Up As a Volunteer
                    </Link>
                    {/* <p itemprop="description" style={{ marginTop: "1rem" }}>
                      Want to be an Active Citizen? Start reporting garbage dumps in your locality and we shall help you eradicate them.
                    </p> */}
                    <Link
                      to="/form"
                      className="thm-btn reportaspot"
                      title=""
                      itemprop="url" style={{marginTop: "0.625rem",textDecoration: "none"}}
                    >
                      Report a Spot
                    </Link>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 col-lg-7">
                  <div className="feat-img2 text-right">
                    <img
                      src={require("../LbtcCarousel/Carousel-W.png")}
                      alt="feat-mckp.png"
                      itemprop="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default EventFunding;
