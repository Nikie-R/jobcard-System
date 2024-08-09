const customerAPI = require("./routes/customerAPI");
const invoiceAPI = require("./routes/invoiceAPI");
const jobCardAPI = require("./routes/jobCardAPI");
const quotationAPI = require("./routes/quotationAPI");
const vehicleAPI = require("./routes/vehicleAPI");

module.exports = (app) => {
  app.use("/api/customer", customerAPI);
  app.use("/api/invoice", invoiceAPI);
  app.use("/api/jobcard", jobCardAPI);
  app.use("/api/quotation", quotationAPI);
  app.use("/api/vehicle", vehicleAPI);
};
