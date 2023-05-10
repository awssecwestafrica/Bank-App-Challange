// Imports...
require("dotenv").config();
const http = require("http");
const app = require("./config/app");

// Create server
const server = http.createServer(app);

const port = process.env["PORT"] || 3000;

server.listen(port, () => console.log(`Server running on ${port}`));
