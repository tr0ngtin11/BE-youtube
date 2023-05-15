export interface Video {
  id: String;
  title: String;
  description: String;
  thumbnail: {
    url: String;
    width: Number;
    height: Number;
  };
  resourceId: {
    videoId: String;
  };
}
