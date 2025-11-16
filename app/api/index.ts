import axios, { type AxiosInstance } from "axios"
import { getCookie } from "~/utils/cookies";

class AxiosConnection {
    api: AxiosInstance;

    constructor(api?: string) {
        this.api = axios.create({
            baseURL: api || `https://project-base.72-60-1-117.nip.io`,
        });
        this.api.interceptors.request.use((config) => {
            const authToken = getCookie("authToken");
            if (authToken) {
                config.headers = config.headers || {};
                config.headers["Authorization"] = `Bearer ${authToken}`;
            }
            return config;
        });
    }

}

export default new AxiosConnection()