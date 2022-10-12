import axios from "axios";

const KEY = "AIzaSyCX2RvWo4GVMAEajk-x9cBZNwZ8PEKT2kQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
