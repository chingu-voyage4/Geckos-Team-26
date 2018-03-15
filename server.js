const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const authRoute = require("./routes/authRoute");
const oauthRoute = require("./routes/oauthRoute");
const logoutRoute = require("./routes/logoutRoute");
const clientRoute = require("./routes/clientRoute");

server.use("/auth", authRoute);
server.use("/oauth", oauthRoute);
server.use("/logout", logoutRoute);
server.use("*", clientRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
