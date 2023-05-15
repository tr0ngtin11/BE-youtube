import { Video } from "interface/interface";
import mongoose from "mongoose";

// const VideoSchema = new mongoose.Schema({
//   id: String,
//   title: String,
//   description: String,
//   thumbnail: {
//     url: String,
//     width: Number,
//     height: Number,
//   },
//   resourceId: {
//     videoId: String,
//   },
// });

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

export const getVideoById = (id: String) => {
  return VideoModel.findById(id);
};

export const createNewVideo = (newVideo: Video) => {
  VideoModel.create(newVideo);
};

export const deleteVideo = (id: String) => {
  return VideoModel.findOneAndDelete({ _id: id });
};

export const updateVideo = (id: String, newVideo: Video) => {
  return VideoModel.findByIdAndUpdate(id, newVideo);
};
