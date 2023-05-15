const axios = require("axios");
const { Console } = require("console");
const fs = require("fs");
const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/playlistItems",
  params: {
    playlistId: "RDZiQo7nAkQHU",
    part: "snippet",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "a097b3c4f5msh3645a16617ef9c5p1375e0jsnec553df2fd0b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const fetch = async (req, res) => {
  try {
    const response = await axios.request(options);
    fs.writeFileSync("data.json", JSON.stringify(response.data.items));
  } catch (error) {
    console.error(error);
  }
};
fetch();
