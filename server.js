const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, "client", "build")));

const authRoute = require("./routes/authRoute");
const oauthRoute = require("./routes/oauthRoute");
const logoutRoute = require("./routes/logoutRoute");
const petRoute = require("./routes/petRoute");
const clientRoute = require("./routes/clientRoute");

server.use("/auth", authRoute);
server.use("/oauth", oauthRoute);
server.use("/logout", logoutRoute);
server.use("/pets", petRoute);
server.use("*", clientRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
