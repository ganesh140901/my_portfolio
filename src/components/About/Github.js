import React from "react";

import { Row } from "react-bootstrap";

function Github() { 
  const educationData = [
    {
      degree: "B.Tech",
      institution: "National Institute Of Technology Arunachal Pradesh",
      location: "India",
      score: "8.41",
      Status: "Currently Pursuing",
    },
    {
      degree: "Senior Secondary",
      institution: "Ramudar Singh Gulabi Devi Intermediate College",
      location: "Rampur Garh ,Deoria",
      score : "79%",
      board: "Uttar Pradesh Madhyamik Sikhsha Parishad",
    },
    {
      degree: "Secondary",
      institution: "Assumption Public School",
      location: "Gorakhpur",
      score: "88%",
      board: "CBSE Board",
    },
  ];
  return (
    <Row>
      <section id="education">
      <div className="container">
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>ADDRESS:</strong> {edu.location}</p>
            {edu.status && <p><strong>Status:</strong> {edu.status}</p>}
            <p><strong>Score:</strong> {edu.score}</p>
            {edu.board && <p><strong>Board:</strong> {edu.board}</p>}
          </div>
        ))}
      </div>
    </section>
    </Row>
  );
}

export default Github;
