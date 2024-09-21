import React, { useState, useEffect } from "react";
import axios from "axios";
import DataGrid from "../common/DataGrid";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
const Jobcards = () => {
  const [jobcards, setjobcards] = useState([]);
  const columns = [
    { header: "#", accessor: "No" },
    { header: "Customer Name", accessor: "name" },
    { header: "Date", accessor: "date" },
    { header: "Reg No", accessor: "regNo" },
    { header: "Make", accessor: "make" },
    { header: "Model", accessor: "model" },
    { header: "Kilometers", accessor: "kilometers" },
    { header: "Fuel Level", accessor: "fuelLevel" },
    { header: "Battery", accessor: "battery" },
    { header: "Triangle", accessor: "triangle" },
    { header: "Spare Tyre", accessor: "spareTyre" },
    { header: "Jack", accessor: "jack" },
    { header: "Complaint", accessor: "complaint" },
    { header: "Status", accessor: "status" },
  ];
  useEffect(() => {
    fetchJobcards();
  }, []);

  const fetchJobcards = async () => {
    const response = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/jobcard/getJobcards"
    );
    const data = response.data;

    let jobcardsData = [];
    data.forEach((jobcard) => {
      const info = {
        No : jobcard.jobCardId,
        name: jobcard.name,
        date: jobcard.date,
        regNo: jobcard.vehicle.regNo,
        make: jobcard.vehicle.make,
        model: jobcard.vehicle.model,
        kilometers: jobcard.kilometers,
        fuelLevel: jobcard.fuelLevel,
        battery: jobcard.battery, 
        triangle: jobcard.triangle ? <CheckIcon color={"green.500"}/> : <CloseIcon color={"red.500"}/>,
        spareTyre: jobcard.spareTyre? <CheckIcon color={"green.500"}/> : <CloseIcon color={"red.500"}/>,
        jack: jobcard.jack ? <CheckIcon color={"green.500"} /> : <CloseIcon color={"red.500"} />,
        complaint: jobcard.complaint,
        status: jobcard.status
      };
      jobcardsData.push(info);
    });
    setjobcards(jobcardsData);
  };

  return (
    <div>
      <DataGrid columns={columns} data={jobcards} caption="jobcards" />
    </div>
  );
};

export default Jobcards;
