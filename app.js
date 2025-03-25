import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import {env} from "./support/helpers.js";

const app = express();

app.listen(env("PORT"), () => {
  console.log(`server listen on prot: ${env("port")}`)
})