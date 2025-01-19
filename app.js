const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const ConnectDB  = require("./db/db");

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Task Manager API");
});

// App routes
app.use("/api/v1/tasks", tasks);

const port = 4300;

const start = async () => {
  try {
    await ConnectDB();
    app.listen(port, console.log(`- Local: http://localhost:${port}/`));
  } catch (error) {
    console.log(error);
  }
};

start();
