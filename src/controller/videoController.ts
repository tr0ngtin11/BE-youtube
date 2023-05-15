import { Video } from "interface/interface";
import { createNewVideo, getAllVideos } from "../db/video";
import express from "express";

export const getVideos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const videos = await getAllVideos();
    return res.status(200).json(videos).end();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export const createVideo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const videos: Video[] = req.body;
    videos.forEach(async (video) => {
      await createNewVideo(video);
    });
    // const newVideo = await createNewVideo(video);
    return res.status(200).json("created video successfully").end();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
