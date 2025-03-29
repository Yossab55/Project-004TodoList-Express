import express from 'express';

const HomeRouter = express.Router();

HomeRouter.get("", (request, response) => {
  console.log("hi");
  response.end("hi");
})


export {HomeRouter};