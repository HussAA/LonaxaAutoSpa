import styled from "@emotion/styled";
import React from "react";
import _ from "lodash";
const Title = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
  position: relative;
  padding-bottom: 15px;
  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 2px;
    bottom: 0px;
    left: calc(50% - 25px);
    background: #499caf;
  }
`;
const Services = () => {
  return (
    <>
      <div className="container text-center">
        <div className="section-title">
          <div className="section-h2">Services</div>
          <div className="section-p">
            Transform your vehicle with our meticulous car detailing services,
            offering interior & exterior detailing, power polish, and ceramic
            coating applications for a pristine finish.
          </div>
        </div>
        <div className="row">
          <ServicesArray
            title={["Auto Detailing"]}
            text={[
              "Auto detailing involves meticulously cleaning, polishing, and restoring the interior and exterior of vehicles to enhance their appearance and maintain their condition.",
            ]}
            price={["$20"]}
          />
          <ServicesArray
            title={["Scratch Removal"]}
            text={[
              "Scratch Removal offers professional and effective solutions to restore surfaces by eliminating scratches and blemishes, renewing them to their original pristine condition.",
            ]}
            price={["$99"]}
          />

          <ServicesArray
            title={["Headlight Restoration"]}
            text={[
              " Headlight restoration involves the process of renewing and enhancing the clarity and effectiveness of cloudy or faded vehicle headlights.",
            ]}
            price={["$50"]}
          />
          <ServicesArray
            title={["Exterior Polish"]}
            text={[
              "Exterior Polish is a high-quality automotive detailing service that restores and enhances the shine and finish of your vehicle's exterior surfaces.",
            ]}
            price={["$$$"]}
          />
          <ServicesArray
            title={["Engine Bay Shampoo"]}
            text={[
              "Exterior Polish is a high-quality automotive detailing service that restores and enhances the shine and finish of your vehicle's exterior surfaces.",
            ]}
            price={["$$$"]}
          />
          <ServicesArray
            title={["Engine Bay Shine"]}
            text={[
              "Exterior Polish is a high-quality automotive detailing service that restores and enhances the shine and finish of your vehicle's exterior surfaces.",
            ]}
            price={["$$$"]}
          />
        </div>
      </div>
    </>
  );
};

export default Services;

const ServicesArray = ({ text, title, price }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-md-6 col-lg-4 p-3">
                  <div className="icon">
                    <i className="bi bi-cart-plus-fill" />
                  </div>
                  <Title className="mb-3 pb-2">{title}</Title>
                  <div className="">{v}</div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
