import { createVideo, getVideos } from "../controller/videoController";
import express from "express";

export default (router: express.Router) => {
  router.get("/video", getVideos);
  router.post("/video", createVideo);
};
