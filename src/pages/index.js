import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";
import Services from "../components/Services";
import LandingSection from "../components/LandingSection";
import Gallery from "../components/Gallery";
import ScrollArrow from "../components/ScrollButton";
import Pricing from "../components/package";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const PricingSection = styled.section`
  background: #101010;
  padding: 20px 10px 70px 10px;
  @media (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Helmet>
      <meta name="description" content="Transform your vehicle with our premium detailing services." />
        <title>King's Autozone</title>
      </Helmet>
      <header>
        <section style={{ minHeight: "100px" }}>
          <AppNavBar />
        </section>
      </header>
      <main>
        <section>
          <LandingSection />
        </section>
        <section id="About" style={{ marginTop: "80px", paddingTop: "80px" }}>
          <AboutUs />
        </section>

        <PricingSection id="Packages" style={{ marginTop: "100px", paddingTop: "120px" }}>
          <Pricing />
        </PricingSection>
        <section
          id="Services"
          style={{
            marginBottom: "100px",
            paddingTop: "120px",
          }}
        >
          <Services />
        </section>
        <section
          id="Gallery"
          style={{
            marginBottom: "100px",
            paddingTop: "50px",
          }}
        >
          <Gallery />
        </section>
        <section>
          <Footer />
        </section>
        <section>
          <ScrollArrow />
        </section>
      </main>
    </>
  );
};

export default IndexPage;

