import { Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import { Navigate } from "react-router-dom";
import {getFirestore} from "firebase/firestore"
import * as authActions from "../redux/actions/authActions";
import { connect } from "react-redux";
import { getAuth } from "firebase/auth";

const Dashboard = ({ children },props) => {
  const auth=getAuth();
  const user=auth.currentUser;
  const displayName=user.displayName;
  const picURL=user.photoURL;
  const email=user.email;
  const handleLogOut = () => {
    props.signOut();
  };
  return (
    <div>
      <Container id="dash">
        <div className="admin text-start">
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className="admin-side">
                <img src={picURL} alt="profile pic" height="150px" className="profilePic"/>
                <h3 className="mb-1">{displayName}</h3>
                <h5 className="mb-2">{email}</h5>
                <hr />
                <ul className="text-start">
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/prevtrip"
                      activestyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-bag-check"></i> &nbsp; Previous Trips
                    </NavLink>
                  </li>
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/uptrip"
                      activestyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-pencil-square"></i> &nbsp; Upcoming Trips
                    </NavLink>
                  </li>
                  <li className=" d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/newtrip"
                      activestyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-plus-square"></i> &nbsp; Add New Trip
                    </NavLink>
                  </li>
                </ul>
                <hr />
                <Button onClick={handleLogOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                  Log Out&nbsp;
                  <i className="bi bi-box-arrow-right"></i>
                </Button>
              </div>
            </Col>
            <Col className="row" id="a" xs={12} md={12} lg={9}>
              {children}
            </Col>
            
          </Row>
          <br/>
            <br/>
            
        </div>
      </Container>
      <br/>
    </div>
  );
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

