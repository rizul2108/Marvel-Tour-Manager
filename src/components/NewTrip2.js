import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import "./NewTrip.css";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, FloatingLabel, Form } from "react-bootstrap";
import { fieldCd } from "./typeCodes.js";
import { connect } from "react-redux";
import * as TripDtlActions from "../redux/actions/tripDtlActions";

const NewTrip2 = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (props.trip.id === null||props.trip.title==="") {
      
      navigate("/newtrip");
      
    }
  });
  const [tripDetails, setTripDetails] = useState(props.tripDetails);
  const onChange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setTripDetails({ ...tripDetails, [key]: val });
  };

 
  
  const onSubmit = async () => {
    if (props.tripDetails != null) {
      props.updateTripDetails(tripDetails);
    } else {
      props.addTripDetails(tripDetails);
    }
    navigate("/newtrip3");
  };

  const getFieldData = (key) => {
    if (tripDetails && tripDetails[key]) {
      return tripDetails[key];
    }
    return "";
  };

  return (
    <>
      <Dashboard>
        <div className="admin-details">
          <h1 className="ms-3">Add Trip Details</h1>
          <hr />
          <div className="order-list">
            <Row>
              <Col xs={12} md={8}>
                <div className="add-event-card p-3 shadow bg-white mb-3">
                  <div className="d-flex justify-content-between align-items-center p-0 mb-2 border-bottom">
                    <p className="d-inline-block text-main fw-bold fs-5">
                      <span className="text-muted fs-5">Add Trip Details</span>
                    </p>
                    <p className="d-inline-block fw-bold text-muted fs-6">
                      <i className="bi bi-info-circle me-1" />
                    </p>
                  </div>
                  <form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Location"
                      className="mb-3"
                    >
                      <Form.Control
                        name={fieldCd.Destination}
                        value={getFieldData(fieldCd.Destination)}
                        onChange={onChange}
                        type="text"
                        placeholder="Location"
                        className="mb-3"
                        required
                      />
                    </FloatingLabel>
                    <p className="mb-3">Pick Dates for Trip</p>
                    <label htmlFor="start-date" className="mb-3">
                      Start Date :
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      name={fieldCd.StartDate}
                      value={getFieldData(fieldCd.StartDate)}
                      onChange={onChange}
                      className="mb-3"
                    />
                    <br />
                    <label htmlFor="end-date" className="mb-3">
                      End Date :
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      name={fieldCd.EndDate}
                      value={getFieldData(fieldCd.EndDate)}
                      onChange={onChange}
                      className="mb-3"
                      required
                    />
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Image URL"
                      className="mb-3"
                    >
                      <Form.Control
                        name={fieldCd.ImageURL}
                        value={getFieldData(fieldCd.ImageURL)}
                        onChange={onChange}
                        type="text"
                        placeholder="Image URL"
                        required
                        className="mb-3"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Members Number"
                      className="mb-3"
                    >
                      <Form.Control
                        name={fieldCd.MembersNum}
                        value={getFieldData(fieldCd.MembersNum)}
                        onChange={onChange}
                        type="number"
                        placeholder="No. of Membes"
                        required
                        className="mb-3"
                      />
                    </FloatingLabel>

                    <Button
                      variant="danger"
                      className="btn-main w-100"
                      onClick={onSubmit}
                    >
                      Add More details
                    </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tripDetails: state.tripDetails,
    trip: state.trip,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTripDetails: (tripDetails) => dispatch(TripDtlActions.add(tripDetails)),
    updateTripDetails: (tripDetails) =>
    dispatch(TripDtlActions.update(tripDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTrip2);
