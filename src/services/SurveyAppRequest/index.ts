import { AxiosRequest } from "../AxiosRequest";
import { HttpRequest } from "../HttRequest";

class SurveyAppRequest extends AxiosRequest {
    LOGIN_URL = 'auth/login';
    constructor(baseURL: string) {
        super(baseURL)
    }
    
    async login({email, password}: any): Promise<String> {
        return (await this.axiosInstance.post(this.LOGIN_URL, {email, password})).data;
    }
}

export const surveyAppRequest = new SurveyAppRequest('http://localhost:8000');