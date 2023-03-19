import React, { useState } from "react";
import  aboutUs from "./Images/aboutUs.png";
import { Col, Container, Row } from "react-bootstrap";
import editable from "./Images/editable.png";
import memorable from "./Images/memory.png";
import quality from "./Images/quality.png";
import award from "./Images/award.png";
export default function About() {
  return (
    <Container>
      <br/>
      <br/>
      <h1 className="text-center">Why Choose Us?</h1>
      <h3 className="text-center">We make your trip 100 times more enjoyable    </h3>
      <br/>
      <br/>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
            <img className="text-1" src={editable} height="200" width="200"/>
            <h3 className="text-center fs-bold">Ultimate flexibility</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              You can make changes in your trip at any time without any problem and also collaborate with other members of trip.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
          <img className="text-1" src={memorable} height="200" width="200"/>          
            <h3 className="text-center fs-bold">Memorable experience</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              You will get mesmerized by the experience of this website and your trip will also be hussle-free if you manage with our website.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
          <img className="text-1" src={quality} height="200" width="200"/>
            <h3 className="text-center fs-bold">Quality at our core</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              High quality standards. Millions of reviews. A Trip Manager company.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
          <img className="text-1" src={award} height="200" width="200"/>
            <h3 className="text-center fs-bold">Award-winning support</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              We’re here to help, 24/7.If you have any kind of query reach us at providers@gmail.com 
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
