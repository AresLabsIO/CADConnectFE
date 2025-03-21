import axios from "axios";
import { User } from "oidc-client-ts";
import { cognitoAuthConfig } from "../config/cognitoAuthConfig";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const user = getUser();
    console.log('user',user)
    const accessToken = user?.access_token;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

function getUser() {
    const oidcStorage = window.sessionStorage.getItem(`oidc.user:${cognitoAuthConfig.authority}:${cognitoAuthConfig.client_id}`)
    if (!oidcStorage) {
        return null;
    }
    return User.fromStorageString(oidcStorage);
}

export default axiosInstance;