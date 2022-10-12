import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ratio ratio-16x9 mb-3">
        <iframe title="video Player" src={videoSrc} allowFullScreen></iframe>
      </div>
      <h5>{video.snippet.title}</h5>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
