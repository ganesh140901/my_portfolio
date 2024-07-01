import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ganesh Pandey </span>
            from <span className="purple"> Kushinagar, India.</span>
            <br />
            a passionate Full Stack Software Developer and avid coder. Currently pursuing my Bachelor's degree in Computer Science and Engineering at NIT Arunachal Pradesh, I am dedicated to building innovative solutions and continuously enhancing my skills.

With a strong foundation in both frontend and backend development, I enjoy creating seamless, user-friendly applications. My journey as a developer is driven by a relentless curiosity and a commitment to learning new technologies.

I have tackled numerous Data Structures and Algorithms (DSA) problems, which has honed my problem-solving abilities and prepared me to take on complex challenges. My portfolio showcases a range of projects that reflect my technical skills and creativity.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
