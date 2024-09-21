import React, { useState, useEffect } from "react";
import axios from "axios";
import DataGrid from "../common/DataGrid";
const Vehicles = () => {
  const [vehicles, setvehicles] = useState([]);
  const columns = [
    { header: "Customer Name", accessor: "name" },
    { header: "Reg No", accessor: "regNo" },
    { header: "VIN", accessor: "vin" },
    { header: "Engine No", accessor: "engineNo" },
    { header: "Make", accessor: "make" },
    { header: "Model", accessor: "model" },
    { header: "Colour", accessor: "color" },
    { header: "Year", accessor: "year" },
    { header: "Body Type", accessor: "bodyType" },
  ];
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const response = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/vehicle/getVehicles"
    );
    const data = response.data;

    setvehicles(data);
  };

  return (
    <div>
      <DataGrid columns={columns} data={vehicles} caption="Vehicles" />
    </div>
  );
};

export default Vehicles;
