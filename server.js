const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;

// runs the server that takes a port number
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
});