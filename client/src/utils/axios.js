import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://falcon-net.onrender.com/api/v1",
  // withCredentials: true,
});

export default axios;
