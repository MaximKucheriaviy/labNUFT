import cors from "cors";
import express from "express";
import {
  helloController,
  namesController,
  fruitController,
} from "./controllers.js";

const server = express();
const port: number = 3001;

server.use(cors());
server.get("/hello", helloController);
server.get("/API/names", namesController);
server.get("/fruit", fruitController);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
