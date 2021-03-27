const express = require("express");
const fs = require("fs");

const app = express();

if (!process.env.PORT) {
  throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

// ... code omitted for brevity ...

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

