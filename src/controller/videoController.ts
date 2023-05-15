import { Video } from "interface/interface";
import { ObjectId } from "mongodb";
import {
  VideoModel,
  createNewVideo,
  deleteVideo_,
  // deleteVideo_,
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
    const id = req.params.id;
    console.log(id);
    const video = await getVideoById_(id);
    return res.status(200).json(video).end();
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
    const id = req.params.id; // lấy giá trị _id từ request parameters
    const result = await deleteVideo_(new ObjectId(id)); // gọi hàm xóa video từ db
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
