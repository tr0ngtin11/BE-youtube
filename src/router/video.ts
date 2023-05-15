import {
  createVideo,
  deleteVideo,
  getVideoById,
  getVideos,
} from "../controller/videoController";
import express from "express";

export default (router: express.Router) => {
  router.get("/video/:id", getVideoById);
  router.get("/video", getVideos);
  router.post("/video", createVideo);
  router.delete("/video/:id", deleteVideo);
};
