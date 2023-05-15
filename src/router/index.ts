import express from "express";
import video from "./video";

const router = express.Router();

export default (): express.Router => {
  video(router);
  return router;
};
