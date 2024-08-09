const bunyan = require("bunyan"),
  bformat = require("bunyan-format"),
  formatOut = bformat({ outputMode: "short" });

const log = bunyan.createLogger({
  name: "Jobcard",
  stream: formatOut,
  level: "info",
});

module.exports = log;
