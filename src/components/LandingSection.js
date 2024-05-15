import React from "react";
import styled from "@emotion/styled";
import Landingimage from "../images/LandingSection.png";

const Slogan = styled.div`
  font-size: 20pt;
  font-family: system-ui;
  font-style: italic;
  color: black;
  @media screen and (max-width: 767px) {
    font-size: 15pt;
    font-weight: 500;
  }
  @media screen and (max-width: 521px) {
    font-size: 13pt;
    font-weight: 400;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 96%;
  left: 25%;
  width: 50%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.6);
  color: white;
  text-align: center;
  padding: 10px;

  @media (max-width: 730.1px) {
    left: 20%;
    width: 60%;
    top: 95%;
  }
  @media (min-width: 1300px) {
    top: 97%;
  }
`;
const SloganPortfolio = () => {
  return (
    <>
      <div className="container text-center">
        <Overlay className="shadow">
          <Slogan>
            London, Ontario, Canada <br />
            <div style={{fontSize:"15px", fontWeight:"500"}}>**Pick Up/Delivery or Drop Off/Pick up**</div>
          </Slogan>
        </Overlay>
      </div>
    </>
  );
};

const Masthead = styled.div`
  position: relative;
  height: 60vh;
  margin-top: auto;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 0%,
      rgba(129, 109, 0, 0) 100%
    ),
    url(${Landingimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1299.6px) {
    height: 80vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
    margin-left: 45px;
    margin-right: 45px;
  }
  @media (max-width: 730px) {
    height: 35vh;
  }
`;
// const Headliner = styled.div`
//   font-size: 25px;
//   color: white;
//   font-style: italic;
//   text-align: center;
//   top: 50%;
//   left: 50%;
//   transform: translate(-100%, -50%);
//   position: absolute;

//   @media (max-width: 730px) {
//     font-size: 16px;
//   }
// `;

const LandingSection = () => {
  return (
    <>
      <Masthead>
        <div className="container">
          {/* <Headliner>"Supreme Shine Detailing: <br/> Where Cleanliness Meets Perfection"</Headliner> */}
          <SloganPortfolio />
        </div>
      </Masthead>
    </>
  );
};

export default LandingSection;
