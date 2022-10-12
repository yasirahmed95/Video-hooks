import React, { useEffect, useState } from "react";
import Youtube from "../Apis/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearchSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    onSearchSubmit("buildings");
  }, []);

  return (
    <div className="container">
      <SearchBar onFormSubmit={onSearchSubmit} />
      <div className="row">
        <div className="col-lg-8">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="col-lg-4">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
