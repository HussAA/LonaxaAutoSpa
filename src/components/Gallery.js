import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
import styled from "@emotion/styled";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: #646363;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #6e6e6e;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;
class Gallery extends Component {
  render() {
    const before = require("../images/before3.webp").default;
    const after = require("../images/after3.webp").default;
    const before1 = require("../images/before2.webp").default;
    const after1 = require("../images/after2.webp").default;
    const before2 = require("../images/before.webp").default;
    const after2 = require("../images/after.webp").default;

    return (
      <>
        <SectionTitles className="text-center text-uppercase">
          Gallery
        </SectionTitles>
        <SectionHeading>Before & After Showcase</SectionHeading>
        <SectionDescription>
          Before-and-after gallery demonstrating the exceptional results of our
          professional car detailing services.
        </SectionDescription>

        <div className="container mb-5 padding-gallery">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before}
                rightImage={after}
              />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before1}
                rightImage={after1}
              />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before2}
                rightImage={after2}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
