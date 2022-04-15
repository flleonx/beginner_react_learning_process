const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { dbConnection } = require("./database/config");

// Express server
const app = express();

// DB
dbConnection();

// CORS
app.use(cors());

//Public directory
app.use(express.static("public"));

// Reading and parsing body
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// TODO: CRUD

// Listen requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
