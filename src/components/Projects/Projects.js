import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/emotion.png";

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
              imgPath={chatify}
              isBlog={false}
              title="GYM WEBSITE"
              description="Our gym website, built with the MERN stack, features a responsive React.js UI, robust Node.js/Express.js RESTful APIs, and flexible MongoDB storage. JWT ensures secure authentication. Webpack and Babel optimize development, ensuring high performance and maintainability."
              ghLink="https://github.com/ganesh140901/my_gym_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BOOKSTORE"
              description="Our bookstore, developed with the MERN stack (MongoDB, Express.js, React.js, Node.js), boasts a responsive React.js front-end with Redux for state management. Node.js and Express.js power the backend with efficient RESTful APIs, while MongoDB provides scalable data storage. JWT ensures secure authentication, and Webpack with Babel optimizes development for performance and maintainability."
              ghLink="https://github.com/ganesh140901/mybookstore"
            />
          </Col>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RESTURANT WEBSITE"
              description="Our restaurant website, crafted with the MERN stack (MongoDB, Express.js, React.js, Node.js), features a responsive React.js front-end enhanced by Redux for streamlined state management. Node.js and Express.js empower the backend with robust RESTful APIs, complemented by MongoDB for scalable data storage. JWT ensures secure user authentication, while Webpack and Babel optimize development for peak performance and maintainability.

"
              ghLink="https://github.com/ganesh140901/resturant_website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
