const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const clientRoute = require("./routes/clientRoute");

server.use("/auth/signup", signupRoute);
server.use("/auth/login", loginRoute);
server.use("/logout", logoutRoute);
server.use("*", clientRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
