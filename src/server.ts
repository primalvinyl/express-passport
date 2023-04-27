import http from 'http';
import app from './app';

// initialize http server with express
const server = http.createServer(app);

// start http server
const port = process.env.PORT || '8080';
server.listen(port, () => console.log(`Server started on port ${port}`));
