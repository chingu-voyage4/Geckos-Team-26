const express = require('express');

const server = express();

const testRoute = require('./routes/test_route');

server.use('/test', testRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));