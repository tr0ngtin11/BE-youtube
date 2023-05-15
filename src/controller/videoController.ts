import { Video } from "interface/interface";
import {
  createNewVideo,
  deleteVideo_,
  getAllVideos,
  getVideoById_,
} from "../db/video";
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

export const getVideoById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id: String = req.params.id;
    console.log(id);
    const video = await getVideoById_(id);
    if (video) {
      return res.status(200).json(video).end();
    }
    return res.status(400).json("not found").end();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export const deleteVideo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id: String = req.params.id;
    const result = await deleteVideo_(id);
    if (result) {
      return res.status(200).json("deleted video successfully").end();
    }
    return res.status(400).json("delete video failed").end();
  } catch (error) {
    console.log(error);
    return {
      status: 400,
    };
  }
};
