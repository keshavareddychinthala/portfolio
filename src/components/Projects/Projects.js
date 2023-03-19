import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import  jet from "../../Assets/Projects/jet.jpg";
import pharma from "../../Assets/Projects/pharma.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jet}
              isBlog={false}
              title="Jet Airlines"
              description="Air Lines Ticket Booking Platform"
              Link="https://www.jetblue.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharma}
              isBlog={false}
              title="Kroger Phrama"
              description="Effort to provide a portal for Kroger Specialty Pharmacy Patients to manage their own contact information, request refills, and access expense and prescription history. This is a development and production support with fixing issues to reduce the support. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="yet to add other Proojects... Coming soon"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
