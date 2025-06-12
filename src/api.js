import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "964fcef8d648e0047d3f7a51db9ce1a8",
  },
});

export default tmdb;
