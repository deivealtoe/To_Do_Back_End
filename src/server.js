const express = require('express');
const { notFound, catchAllErrors } = require('./middlewares/index');
const userRoute = require('./routes/UserRoutes');

const server = express();

server.use(express.json());

server.use(userRoute);

server.use(notFound);
server.use(catchAllErrors);

const HOST = '0.0.0.0';
const PORT = 3334;

server.listen(PORT, HOST, () => {
    console.log(`Listening on PORT: ${PORT}`);
});