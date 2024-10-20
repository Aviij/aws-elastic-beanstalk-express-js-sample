const express = require('express');
const app = express();

// Use the environment port or default to 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Welcome to AWS</title>
  <style>
    body {
      background-image: url('https://via.placeholder.com/1920x1080');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      color: white;
      text-align: center;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    h1 {
      margin-top: 20%;
    }
  </style>
</head>
<body>
  <h1>Hello World! Welcome to AWS</h1>
</body>
</html>
`));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
