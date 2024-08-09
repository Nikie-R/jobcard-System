const express = require("express");
const { sequelize } = require("./models");
const morgan = require("morgan");
const log = require("./log");
const setupRoutes = require("./setupRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Test database connection
sequelize
  .authenticate()
  .then(() => log.info("Database connected..."))
  .catch((err) => log.error("Error connecting to database:", err));

log.info("Setting up routes...");
setupRoutes(app);

sequelize
  .sync()
  .then(() => {
    log.info("Database synced");
    app.listen(port, () => log.info(`Server running on port ${port}`));
  })
  .catch((err) => log.error("Error syncing database:", err));
