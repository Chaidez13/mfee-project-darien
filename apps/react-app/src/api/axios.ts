import axios from "axios";

const axiosInstance = axios.create();
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkQG91dGxvb2suY29tIiwiaWF0IjoxNzE4NzU3NTM2LCJleHAiOjE3MTg3NjExMzZ9.P8gl39xUUxU2-14oDinavsZP84ZNfXoY7NeCH3ROU-o"
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = "https://test.neuraac.com/api";
  config.headers.Authorization = `Bearer ${token}`;
  config.signal = AbortSignal.timeout(5000);
  return config;
});

export default axiosInstance;
