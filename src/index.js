const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get('/home',(req,res)=>{
    res.send("Hello world!")
});
app.post("/add", (req, res) => {
    if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
      res.send({
        status: "error",
        message: "Invalid data types",
        sum: undefined,
      });
      res.end();
      return;
    }
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
      res.send({
        status: "error",
        message: "Overflow",
        sum: undefined,
      });
      res.end();
      return;
    } else {
      res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: num1 + num2,
      });
      res.end();
      return;
    }
  });
  app.post("/sub", (req, res) => {
    if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
      res.send({
        status: "error",
        message: "Invalid data types",
        difference: undefined,
      });
      res.end();
      return;
    }
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 > 1000000 || num2 > 1000000  || num1-num2>1000000) {
      res.send({
        status: "error",
        message: "Overflow",
        difference: undefined,
      });
      res.end();
      return;
    } else {
      res.send({
        status: "success",
        message: "the difference of given two numbers",
        difference: num1 - num2,
      });
      res.end();
      return;
    }
  });
  app.post("/multiply", (req, res) => {
    if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
      res.send({
        status: "error",
        message: "Invalid data types",
        result: undefined,
      });
      res.end();
      return;
    }
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 > 1000000 || num2 > 1000000 ||  num1*num2>1000000) {
      res.send({
        status: "error",
        message: "Overflow",
        result: undefined,
      });
      res.end();
      return;
    } else {
      res.send({
        status: "success",
        message: "the product of given two numbers",
        result: num1*num2,
      });
      res.end();
      return;
    }
  });
  app.post("/divide", (req, res) => {
    if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
      res.send({
        status: "error",
        message: "Invalid data types",
        result: undefined,
      });
      res.end();
      return;
    }
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 > 1000000 || num2 > 1000000 || num2===0||  num1/num2>1000000) {
      res.send({
        status: "error",
        message: "Overflow",
        result: undefined,
      });
      res.end();
      return;
    } else {
      res.send({
        status: "success",
        message: "the division of given two numbers",
        result: num1/num2,
      });
      res.end();
      return;
    }
  });
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;