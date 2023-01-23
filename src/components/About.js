import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import aboutImg from "../assets/images/about-us.png";
import CountUp from "react-countup";
import "../css/about.css";

const AboutUs = () => {
  return (
    <AboutWrapper>
    <section id = "about">
      <Container>
          <div className='categories-list-top '>
            <h2>About Us</h2>
          </div>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <p>
              EduChain helps them achieve their career goals with the numerous online courses and get certificates which will help them to upgrade their job skills and advance their careers. 
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  .categories-list-top{
    margin-bottom: 32px;
    margin-top: 32px;
  }
`;

export default AboutUs;
