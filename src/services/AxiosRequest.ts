import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpRequest } from "./HttRequest";

export class AxiosRequest implements HttpRequest {
    axiosInstance: AxiosInstance;

    constructor(baseURL: string, headers?: AxiosHeaders) {
        this.axiosInstance = axios.create({
            baseURL,
            headers
        });
    }

    async get(url: string, options?: AxiosRequestConfig): Promise<any> {
        return await this.axiosInstance.get(url, options);
    }

    async delete(url: string, options?: AxiosRequestConfig): Promise<any> {
        return await this.axiosInstance.get(url, options);
    }

    async post(url: string, body: any, options?: AxiosRequestConfig): Promise<any> {
        return await this.axiosInstance.post(url, body, options);
    }

}