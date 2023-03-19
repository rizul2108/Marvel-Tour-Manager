import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Home() {
  return (
    <div className="container">
      <br />
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 h-50" src={img1} alt="First slide" />
          <Carousel.Caption className="home">
            <h3>Discover New places and experiences</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 h-50" src={img2} alt="Second slide" />

          <Carousel.Caption className="home ">
            <h3 className="white">Travel is an investment in yourself</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <Container>
        <Row className="section-title">
          <Col className="h"></Col>
          <Col className="h">
            <h1>Most Trending Tours</h1>
            <h5 className=" text-main">
              Life is Short, and the World is Wide
            </h5>
          </Col>
          <Col className="h"></Col>
        </Row>

        <Row display="flex">
          <Col xs={12} sm={6} md={3}>
            <div className="overflow-hidden w-100 position-relative my-3">
              <img
                className="w-100 ht"
                src="https://media.cntraveler.com/photos/57c06949523900e805f2e31b/master/w_1920%2Cc_limit/yamoussoukro-cote-divoire-Alamy-E7XYDH.jpg"
                alt=""
              />
              <h3 className="featured-title ">AFRICA</h3>
              <hr className="hr"></hr>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="overflow-hidden w-100 position-relative my-3">
              <img
                className="w-100 ht"
                src="https://i.pinimg.com/736x/97/b7/47/97b7478deca26eecb33066f3560aff04.jpg"
                alt=""
              />
              <h3 className="featured-title ">MALDIVES</h3>
              <hr className="hr"></hr>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="overflow-hidden w-100 position-relative my-3">
              <img
                className="w-100 ht"
                src="https://images.unsplash.com/photo-1559738933-d69ac3ff674b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVneXB0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <h3 className="featured-title">EGYPT</h3>
              <hr className="hr"></hr>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="overflow-hidden w-100 position-relative my-3">
              <img
                className="w-100 ht"
                src="https://mobimg.b-cdn.net/v3/fetch/d9/d98f809700d738e5c7e26606c002bf50.jpeg"
                alt=""
              />
              <h3 className="featured-title m-auto">LONDON</h3>
              <hr className="hr"></hr>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
