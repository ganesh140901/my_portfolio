import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDatabase, FaNetworkWired, FaCodeBranch, FaDesktop } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCodeBranch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDesktop />
      </Col>
    </Row>
  );
}

export default Toolstack;

