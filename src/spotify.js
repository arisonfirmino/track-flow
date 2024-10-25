import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = import.meta.env.VITE_CLIENT_ID;

const redirectUri =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_DEV_REDIRECT_URI
    : import.meta.env.VITE_PROD_REDIRECT_URI;

const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async (config) => {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
