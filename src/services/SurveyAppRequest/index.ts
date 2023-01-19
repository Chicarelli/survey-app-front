import { AxiosRequest } from "../AxiosRequest";
import { HttpRequest } from "../HttRequest";

class SurveyAppRequest extends AxiosRequest {
    LOGIN_URL = 'auth/login';
    CREATE_USER_URL = 'users';
    constructor(baseURL: string) {
        super(baseURL)
    }
    
    async login({email, password}: any): Promise<String> {
        return (await this.axiosInstance.post(this.LOGIN_URL, {email, password})).data;
    }

    async createUser({name, email, password}: any): Promise<void> {
        return (await this.axiosInstance.post(this.CREATE_USER_URL, {
            name,
            email,
            password
        }));
    }
}

export const surveyAppRequest = new SurveyAppRequest('http://localhost:8000');