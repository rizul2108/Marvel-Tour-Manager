import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./NewTrip.css";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, FloatingLabel, Form } from "react-bootstrap";
import * as tripActions from "../redux/actions/tripActions";
import Alert from 'react-bootstrap/Alert';
import { connect } from "react-redux";
const NewTrip = (props) => {
  let navigate = useNavigate();
  const [ttl, setTtl] = useState("");
  const [err,setErr]=useState("");
  const handleChange = (event) => {
    setTtl(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if(ttl===""){
      setErr("Enter title for your trip");
    }
    else{
      if (props.trip.id!=null) {
        props.updateTrip(ttl);
      } else {
        props.setTrip(ttl);
      }
      navigate("/newtrip2");
    }
    
  };

  return (
    <>
      <Dashboard>
        <div className="admin-details">
          <h1 className="ms-3">Add New Trip</h1>
          <hr />
          <div className="order-list">
            <Row>
              <Col xs={12} md={8}>
                <div className="add-event-card p-3 shadow bg-white mb-3">
                  <div className="d-flex justify-content-between align-items-center p-0 mb-2 border-bottom">
                    <p className="d-inline-block text-main fw-bold fs-5">
                      <span className="text-muted fs-5">Add new Trip</span>
                    </p>
                    <p className="d-inline-block fw-bold text-muted fs-6">
                      <i className="bi bi-info-circle me-1" />
                    </p>
                  </div>
                  <form>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Title"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        value={ttl}
                        placeholder="Title"
                        required
                        className="mb-3"
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  {err==""?<></>:<Alert variant='danger'>
          {err}
        </Alert>}
                    <Button
                      variant="danger"
                      className="btn-main w-100"
                      onClick={handleClick}
                    >
                      Add Details of the Trip
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
    trip: state.trip,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTrip: (title) => dispatch(tripActions.setTitle(title)),
    updateTrip: (title) => dispatch(tripActions.updateTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTrip);
