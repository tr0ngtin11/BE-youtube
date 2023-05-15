import { Video } from "interface/interface";
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  kind: String,
  id: String,
  snippet: {
    publishedAt: String,
    channelId: String,
    title: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },
      medium: {
        url: String,
        width: Number,
        height: Number,
      },
      high: {
        url: String,
        width: Number,
        height: Number,
      },
      standard: {
        url: String,
        width: Number,
        height: Number,
      },
      maxres: {
        url: String,
        width: Number,
        height: Number,
      },
    },
    channelTitle: String,
    playlistId: String,
    position: Number,
    resourceId: {
      kind: String,
      videoId: String,
    },
    videoOwnerChannelTitle: String,
    videoOwnerChannelId: String,
  },
});

export const VideoModel = mongoose.model("Video", VideoSchema);

//Method

export const getAllVideos = () => {
  return VideoModel.find({}).limit(50);
};

export const getVideoById_ = (id: String) => {
  return VideoModel.findOne({ id: id });
};

export const createNewVideo = (newVideo: Video) => {
  VideoModel.create(newVideo);
};

export const deleteVideo_ = (id: String) => {
  return VideoModel.findOneAndRemove({ id: id });
};

export const updateVideo = (id: String, newVideo: Video) => {
  return VideoModel.findByIdAndUpdate(id, newVideo);
};
