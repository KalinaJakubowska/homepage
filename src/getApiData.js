import axios from "axios";

export const getApiData = (link) =>
  axios
    .get(link)
    .then((response) => response.data)
    .catch(() => console.log("error"));
