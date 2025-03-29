import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import { env } from "./source/support/helpers.js";
import { StatusCode } from "./source/support/StatusCode.js";
const app = express();

mongoose.connect(env("DATABASE_CONNECTION")).then(() => {
  app.listen(env("PORT"), () => {
    console.log(`server listen on prot: ${env("port")}`);
  });
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(`error with database ${error}`);
});
db.on("open", () => {
  console.log("database is open");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

import { HomeRouter } from "./routers/HomeRouter.js";
app.use("/", HomeRouter);

import { TasksRouter } from "./routers/TasksRouter.js";
app.use("/task", TasksRouter);

app.use((request, response) => {
  response.status(StatusCode.BAD_REQUEST).render("404", { title: "Not Found" });
});
