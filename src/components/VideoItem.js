import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} role="button">
      <div className="row m-1">
        <div className="col-6">
          <img
            alt={video.snippet.title}
            className="img-thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="col-6 d-flex">
          <div className="d-flex align-items-center">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
