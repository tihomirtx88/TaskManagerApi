const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const ConnectDB  = require("./db/db");
require("dotenv").config();
const notfound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cors = require("cors");
app.use(cors());

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// App routes
app.use("/api/v1/tasks", tasks);

app.use(notfound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4300;

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URL );
    app.listen(port, console.log(`- Local: http://localhost:${port}/`));
  } catch (error) {
    console.log(error);
  }
};

start();
