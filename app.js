const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
    <h1>MyWebApp</h1>
    <h2>AWS CI/CD Pipeline Successful!</h2>
    <p>Application deployed using AWS Elastic Beanstalk.</p>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
