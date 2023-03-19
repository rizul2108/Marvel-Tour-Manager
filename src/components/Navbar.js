import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import img2 from "./Images/favicon-32x32.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import * as authActions from "../redux/actions/authActions";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import "./navbar.css"
import { Storage } from "../index";
import { getAuth } from "firebase/auth";
import { useFirestore } from "react-redux-firebase";

function LoggesOut() {
  
  return (
    <>
      <Link to="/register">
        <Button variant="outline-primary mx-2">Register</Button>
      </Link>
      <Link to="/login">
        <Button variant="outline-primary mx-2">LogIn</Button>
      </Link>
    </>
  );
}

function Navbar(props) {
  // const auth1=getAuth();
  // const user=auth1.currentUser;
  // const id = user.uid;
  const auth = props.auth;
  const user=auth.currentUser;
  const handleLogOut = () => {
    props.signOut();}
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-4">
      <div className="container-fluid">
        <Link to="">
        <a className="navbar-brand">
          <img
            src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
            alt="Logo"
            width="40"
            height="32"
            className="d-inline-block align-text-top"
          />
          Avengers Tour Manager
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>

          
          </ul>
        </div>
      </div>
      {isLoaded(auth) && !isEmpty(auth) ? <>
        
      <Dropdown>
      <Dropdown.Toggle className="btn" id="dropdown-basic">
        <img
          alt="Profile Pic"
          src={img2}
          className="Bubble Bubble__size__navbar ImageBubble"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Link to="/prevtrip">
        <Dropdown.Item href="/prevtrip" >
          Dashboard
        </Dropdown.Item>
        </Link>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogOut}>
        Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></> : <LoggesOut></LoggesOut>}
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
