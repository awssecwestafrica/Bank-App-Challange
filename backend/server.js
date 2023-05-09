// Imports...
require("dotenv").config()
const http = require("http");

// Create server
const server = http.createServer();

const port = process.env["PORT"] || 3000;

server.listen(port, () => console.log(`Server running on ${port}`));
