import React, { useState, useEffect } from "react";
import axios from "axios";
import DataGrid from "../common/DataGrid";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Phone", accessor: "phone" },
    { header: "Email", accessor: "email" },
    { header: "Address", accessor: "address" },
  ];
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/customer/getCustomers"
    );
    const data = response.data;

    let customersData = [];
    data.forEach((customer) => {
      const info = {
        name: customer.name + (customer.surname ? ` ${customer.surname}` : ""),
        phone: customer.cellNo,
        email: customer.email,
        address: customer.address,
      };
      customersData.push(info);
    });
    setCustomers(customersData);
  };

  return (
    <div>
      <DataGrid columns={columns} data={customers} caption="Customers" />
    </div>
  );
};

export default Customers;
