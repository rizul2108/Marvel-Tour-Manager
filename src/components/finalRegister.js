import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import img2 from "./Images/favicon-32x32.png";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./finalRegister.css"
import { getAuth } from "firebase/auth";
import { Storage } from "../index";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { updateProfile } from "firebase/auth";
import Form from "react-bootstrap/Form";
import { useFirestore } from "react-redux-firebase";
import { Alert } from "react-bootstrap";
import { getDownloadURL,ref } from "firebase/storage";
function FinalRegister(props) {
  const auth=getAuth();
  const user=auth.currentUser;
  const id = user.uid;
  // let disName=props.data.displayName;
  // let picURL=props.data.photoURL;
  let firestore = useFirestore();
  const navigate=useNavigate();
  const [image,setImage]=useState("");
  const [err,setErr]=useState("");
  const [def,setDeflt]=useState(false);
  const [username,setUsername]=useState("");
  const [url,setURL]=useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const controlProfilePic=()=>{
    if(def===false){
      setDeflt(true);
      // setURL({img2})
    }
    else{
      setDeflt(false);
    }
  }
  const onSubmit=async ()=>{
    if (username===""){
      setErr("Enter a Username");
    }
    else if(image==="" && def===false){
      setErr("Upload a Profile Picture or choose default");
    }
    else{
      updateProfile(auth.currentUser, {
        displayName: username, photoURL: url
      })
        navigate("/prevtrip");
    }
    
  }
  const handleFileUpload = () => {
    if (image===null) {
      setErr("Upload a Profile Picture or choose default");
    }
    const imageref=Storage.ref('/images/'+id).put(image).on("state_changed",()=>{
      alert("success")
      getDownloadURL(ref(Storage,`images/${id}/`)).then((url)=>{
        
        setURL(url);
        console.log(url);
      })
    })
    imageref();

  };
  return (
    <div className="registering">
      <label>Choose Profile Picture</label>
      <br/>
      <div className="fileUpload">
        <input className="fileUpload" type="file"  onChange={(e)=>{setImage(e.target.files[0])}}/>
        <Button onClick={handleFileUpload}>Upload</Button><br/>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Choose Default Profile Picture" onClick={controlProfilePic}/>
      </Form.Group>
        </div>
        <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="name"
                    name="username"
                    value={username || ""}
                    onChange={handleUsername}
                  />
                </FloatingLabel>
                
                <Button onClick={onSubmit}> Submit</Button>
                {err==""?<></>:<><Alert variant='danger'>
          {err}
        </Alert></>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    data: state.firebase.providerData,
  };
};

export default connect(mapStateToProps, null)(FinalRegister);
