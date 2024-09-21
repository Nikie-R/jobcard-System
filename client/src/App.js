import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Customers from "./customer/Customers";
import Vehicles from "./vehicles/Vehicles";
import Jobcards from "./jobcard/Jobcards";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/jobcards" element={<Jobcards />} />
      </Routes>
    </div>
  );
}

export default App;
