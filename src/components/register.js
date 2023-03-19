import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as authActions from "../redux/actions/authActions";
import { isLoaded } from "react-redux-firebase";
import { useNavigate } from "react-router";
// import GoogleButton from "react-google-button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

function Register(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (props.auth?.uid) {
    navigate ("/finalregister");

    }
  }, [props]);

  const onSubmit = () => {
    props.register({ email: email, password: password });

  };
  return (
    <>
      {!isLoaded(props.auth) ? (
        <></>
      ) : (
        <>
          {props.authMine?.loading ? (
            <h4 style={{ marginTop: "10%", height: "52vh" }}>
              Patiently Wait...we are registering you in
            </h4>
          ) : (
            <div className="mx-3 login">
              <br />
              <br />
              <br />
              <br />
              <br />
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email || ""}
                    onChange={handleEmail}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={password || ""}
                    onChange={handlePassword}
                  />
                </FloatingLabel>
                <br />
                {props.authMine?.ErrorMessage?.message ? (
                  <div className="input-group full">
                    <span className="error-message">
                      {props.authMine?.ErrorMessage?.message}
                    </span>
                  </div>
                ) : (
                  <></>
                )}{" "}
                <br />
                <Button
                  type="submit"
                  onClick={onSubmit}
                  value="Submit"
                  className="my-3 mx-3"
                >
                  Register
                </Button>
                <Link to="/login">
                  <Button variant="primary-outline" size="lg">
                    Already have an Account? Login Here
                  </Button>
                </Link>
                {/* <GoogleButton className="g-btn m-auto" type="dark" onClick={handleGoogleSignIn}/> */}
              </Form>
            </div>
          )}
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authMine: state.auth,
     };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userData) => dispatch(authActions.register(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
