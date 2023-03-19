import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./TripPreview.css";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { fieldCd } from "./typeCodes"; 
import { useNavigate } from "react-router-dom";
function TripPreview(props) {
  let trip = props.trip;
  let tripDetails = props.tripDetails;
  let responsib = props.responsib;
  let schedule = props.schedule;
  let firestore = useFirestore();
let navigate=useNavigate();
  const rvTripDetails=(key, valToAppend)=>{
    if(tripDetails){
      return tripDetails[key]?tripDetails[key] + (valToAppend?valToAppend:'') :'';
    }
    return '';
}
let Sd=(rvTripDetails(fieldCd.StartDate));
let Ed=(rvTripDetails(fieldCd.EndDate));
let partsS =Sd.split('-');
let partsE =Ed.split('-');
let mydate1 = new Date(partsS[0], partsS[1] - 1, partsS[2]); 
let mydate2 = new Date(partsE[0], partsE[1] - 1, partsE[2]); 
let timeinSecs=mydate2.getTime()-mydate1.getTime();
let days=timeinSecs/(3600*1000*24)+1;

let memNum=(rvTripDetails(fieldCd.MembersNum));

const goBack=()=>{
  navigate("/newtrip3")
}
  const saveTrip = async () => {
    let user = await firestore.collection("users").doc(props.auth.uid).get();
    user = user.data();
    let obj;
    if (user.trips !== undefined) {
      obj = {
        ...user.trips,
        [trip.id]: {
          tripDetails: tripDetails,
          responsib: responsib,
          schedule: schedule,
          trip: trip,
        },
      };
    } else {
      obj = {
        [trip.id]: {
          tripDetails: tripDetails,
          responsib: responsib,
          schedule: schedule,
          trip: trip,
        },
      };
    }
    firestore.collection("users").doc(props.auth.uid).update({
      trips: obj,
    });
  };
  return (
    <div className="tripPreview">
      <h1 className="title">{trip.title}</h1>
      <img
        src={rvTripDetails(fieldCd.ImageURL)}
        alt="img"
        width="550px"
      />
      <div className="details">
        <div>Going to {rvTripDetails(fieldCd.Destination)}</div>
        <div>From  To  </div>
        <div>{rvTripDetails(fieldCd.MembersNum)} Members Going</div>
      </div>

      <h2>Schedule</h2>
      <Accordion>
        {Array.from({ length: days }, (_, i) => (
          <DaySchedule title={i + 1} />
        ))}
      </Accordion>

      <h2>Responsiblities</h2>
      <Accordion>
        {Array.from({ length: memNum }, (_, i) => (
          <Members title={i + 1} />
        ))}
      </Accordion>
      <button className="buton" onClick={saveTrip}>
        Save this Trip
      </button>
      <button className="buton" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}
const DaySchedule = (props) => (
  <div className="cr">
    <Accordion.Item eventKey={props.title}>
      <Accordion.Header>Day {props.title}</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Accordion.Body>
    </Accordion.Item>
  </div>
);
const Members = (props) => (
  <div className="cr">
    <Accordion.Item eventKey={props.title}>
      <Accordion.Header>Member {props.title}</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Accordion.Body>
    </Accordion.Item>
  </div>
);
const mapStateToProps = (state) => {
  return {
    tripDetails: state.tripDetails,
    responsib: state.responsib,
    schedule: state.schedule,
    trip: state.trip,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(TripPreview);
