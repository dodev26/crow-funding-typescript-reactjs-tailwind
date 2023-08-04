import axios, { AxiosInstance } from "axios";

export class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5001/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    this.instance.interceptors.request.use((config) => {
      return config;
    })
    this.instance.interceptors.response.use((response) => {
      return response;
    })
  }
}

const http = new Http().instance
export default http