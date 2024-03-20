import React, { Component } from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../shared/Footer";
import Cpmofgpu from "../components/Cpmofgpu";
import Homepage from "../components/pages/Homepage";

const MainRouters = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/CPMOFGPU" element={<Cpmofgpu />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainRouters;
