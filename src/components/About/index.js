import React from "react";
import mainImage from "../../assets/cover/gabiabout.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <section className="my-5">
      <Container>
        <h1 id="about">About Me </h1>
        <Row>
          <Col>
            <img
              src={mainImage}
              // className="my-2"
              style={{ width: "45%" }}
              alt="mainprofile"
            />
          </Col>
          <Col>
            <p>
              {
                "Petroleum and Gas Engineer with a post degree in Project Management and Strategic Leadership that decided to change completly the path of her life becoming a developer. Gabriela already worked with C++ and C# during univeristy and thats when she found out that this was what she wanted to do for the rest of her life. Currently studing Progamming at the University of Toronto Bootcamp, aspiring to become a FullStack developer."
              }
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
