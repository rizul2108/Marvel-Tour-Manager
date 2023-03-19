import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/login";
import Register from "./components/register";
import UpTrip from "./components/UpTrip";
import NewTrip from "./components/NewTrip";
import NewTrip2 from "./components/NewTrip2";
import NewTrip3 from "./components/NewTrip3";
import PrevTrip from "./components/PrevTrip";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import TripPreview from "./components/TripPreview"
import FinalRegister from "./components/finalRegister";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/prevtrip" element={<ProtectedRoute><PrevTrip /></ProtectedRoute>}/>
        <Route path="/uptrip" element={<ProtectedRoute><UpTrip /></ProtectedRoute>}/>
        <Route path="/newtrip" element={<ProtectedRoute><NewTrip /></ProtectedRoute>}/>
        <Route path="/newtrip2" element={<ProtectedRoute><NewTrip2 /></ProtectedRoute>}/>
        <Route path="/newtrip3" element={<ProtectedRoute><NewTrip3 /></ProtectedRoute>}/>
        <Route path="/finalregister" element={<ProtectedRoute><FinalRegister /></ProtectedRoute>}/>
        <Route path="/trippreview" element={<ProtectedRoute><TripPreview /></ProtectedRoute>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
