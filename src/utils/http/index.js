import axios from "axios";

import { BASE_API_URL } from "../consts/baseURL";

export const APIRoutes = {
        AUTH_LOGIN: "/auth/login"
};


export const $api = axios.create({
        baseURL: BASE_API_URL
});