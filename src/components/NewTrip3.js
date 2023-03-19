import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./NewTrip3.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Container, Row,Button } from "react-bootstrap";
import { fieldCd } from "./typeCodes";
import * as responsibActions from "../redux/actions/responsibActions";
import addSchedule from "../redux/actions/scheduleActions";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import addDays from "../redux/actions/addDayAction";
import { useDispatch } from 'react-redux';

const NewTrip3 = (props) => {
  let navigate = useNavigate();
  let trip = props.trip;
  let tripDetails = props.tripDetails;
  const rvTripDetails = (key) => {
    if (tripDetails) {
      return tripDetails[key];
    }
    return "";
  };
  let NumMembers = rvTripDetails(fieldCd.MembersNum);
  const memNum = parseInt(NumMembers, 10);

  let Sd = rvTripDetails(fieldCd.StartDate);
  let Ed = rvTripDetails(fieldCd.EndDate);
  var partsS = Sd.split("-");
  var partsE = Ed.split("-");
  var mydate1 = new Date(partsS[0], partsS[1] - 1, partsS[2]);
  var mydate2 = new Date(partsE[0], partsE[1] - 1, partsE[2]);
  let timeinSecs = mydate2.getTime() - mydate1.getTime();
  let days = timeinSecs / (3600 * 1000 * 24) + 1;
  const dispatch = useDispatch();

  const handleAddDays = (days) => {
    dispatch(addDays(days));
  };

  useEffect(() => {

    handleAddDays(days);  },[]); 

  const goBack = () => {
    navigate("/newtrip2");
  };
  
  const showPreview = () => {
    navigate("/trippreview");
  };
  
  
 
  return (
    <>
      <h1 className="schedule">Schedule</h1>
      <div className="cards">
        <br />
        {Array.from({ length: days }, (_, i) => (
          <Day key={i} title={i + 1} />
        ))}
      </div>
      <Container id="dash">
        <div className="admin text-start">
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className="admin-side">
                <h4 className="mb-1">Responsibilities & Requisites</h4>
                <hr />
                <ul className="text-start">
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" />
                    Book Flight Tickets
                  </li>
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" /> Book
                    Cab/Taxi to Airport
                  </li>
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" /> Pre-Book
                    Hotels
                  </li>
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" />
                    Bring Travel Adapter
                  </li>
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" /> Bring
                    Place's Map
                  </li>
                  <li className="border-bottom d-block py-2">
                    &nbsp; <input type="checkbox" className="check" />
                    Book Cab to roam around
                  </li>
                  <li className="d-block py-2">
                    &nbsp; <input type="checkbox" className="check" />
                    Bring essential Equipments :
                  </li>

                  <li className=" d-block py-2 px-4">&nbsp; Food</li>
                  <li className=" d-block py-2 px-4">&nbsp; First Aid Kit</li>
                  <li className=" d-block py-2 px-4">
                    &nbsp; Important Medicines
                  </li>
                  <li className=" d-block py-2 px-4">&nbsp; Flashlight</li>
                </ul>
              </div>
            </Col>
            <Col className="row" xs={12} md={12} lg={9}>
              <div className="add-event-card p-3 shadow bg-white mb-3">
                <div className="d-flex justify-content-between align-items-center p-0 mb-2 border-bottom">
                  <p className="d-inline-block text-main fw-bold fs-5">
                    <span className="text-muted fs-5">
                      Choose Members and Assign Responsibilities
                    </span>
                  </p>
                  <p className="d-inline-block fw-bold text-muted fs-6">
                    <i className="bi bi-info-circle me-1" />
                  </p>
                </div>
                <div id="membersDisplay">
                  {Array.from({ length: memNum }, (_, i) => (
                    <Member key={i} title={i + 1}/>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      </Container>
      <div id="saveTrip">
        <button className=" buton" onClick={showPreview}>
          Move to Preview Page
        </button>
        <button className="buton" onClick={goBack}>
          Go Back
        </button>
      </div>
      <br />
    </>
  );
};
const Day = (props) => {
  const dispatch = useDispatch();

  const handleAddSchedule = (dayNo, actNo, task) => {
    dispatch(addSchedule(dayNo, actNo, task));
    console.log("15")
  };
  const [sch3,setSch3]=useState("");
  const [sch1,setSch1]=useState("");
  const [sch2,setSch2]=useState("");
  let a=props.title-1;
  return(
    <div className="cr">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Header>
              <h4>Day {props.title}</h4>
            </Card.Header>
            <br></br>
            <Card.Title>Activities to be Done</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <InputGroup className="mb-3 top input" >
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch1(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2"  onClick={() => handleAddSchedule(a, 0,sch1 )}>
              Save
            </Button>
          </InputGroup>
            <InputGroup className="mb-3 input">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch2(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2"  onClick={() => handleAddSchedule(props.title-1, 1,sch2 )}>
              Save
            </Button>
          </InputGroup>
    
          <InputGroup className="mb-3 input">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch3(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => handleAddSchedule(props.title-1, 2, sch3)}>
              Save
            </Button>
          </InputGroup>
          </ListGroup>
        
        </Card>
      </div>
      )

}
  
  

const Member = (props) => {
  const dispatch = useDispatch();

  const handleAddSchedule = (dayNo, actNo, task) => {
    dispatch(addSchedule(dayNo, actNo, task));
  };
  const [sch3,setSch3]=useState("");
  const [sch1,setSch1]=useState("");
  const [sch2,setSch2]=useState("");
  return(
    <div className="cr">
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <Form.Select aria-label="Default select example">
            <option>Choose Member {props.title}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Card.Title>
      </Card.Body>
      <hr/>
      <InputGroup className="mb-3 top input" >
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch1(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2"  onClick={() => handleAddSchedule(props.title-1, 0,sch1 )}>
              Save
            </Button>
          </InputGroup>
            <InputGroup className="mb-3 input">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch2(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2"  onClick={() => handleAddSchedule(props.title-1, 1,sch2 )}>
              Save
            </Button>
          </InputGroup>
    
          <InputGroup className="mb-3 input">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSch3(e.target.value)}}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => handleAddSchedule(props.title-1, 2, sch3)}>
              Save
            </Button>
          </InputGroup>
    </Card>
  </div>
  )
}
 const mapStateToProps=(state)=>{
  return {
    tripDetails: state.tripDetails,
    trip: state.trip,
    responsib:state.responsib,
    schedule:state.schedule
  };
};
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     addResposnib: (responsib) => dispatch(responsibActions.add(responsib)),
//     updateResponsib: (responsib) =>
//     dispatch(responsibActions.update(responsib)),

//     addSchedule: (schedule) => dispatch(scheduleActions.add(schedule)),
//     updateSchedule: (schedule) =>
//     dispatch(scheduleActions.update(schedule)),
  
//   };
// };
export default (connect)(mapStateToProps,null)(NewTrip3);
