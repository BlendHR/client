// api instance for the drf backend
import axios from "axios";

const BASE_URL = "http://localhost:8000/";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    });

const LOGIN_URL = "/api/accounts/login/";
const SIGNUP_URL = "/api/accounts/signup/";

// verify email looks like thishttp://localhost:8000/api/accounts/signup/verify/?code={{ code }}
const VERIFY_EMAIL_URL = "/api/accounts/signup/verify/";

// add more

// functions

export const async_login = async (email, password) => {
    console.log(email, password);
    try {
        const response = await api.post(LOGIN_URL, {
            email: email,
            password: password,
        });
        return response;
    } catch (error) {
        console.error("Error in async_login:", error);
        return error.response;
    }
}


export const async_signup = async (data) => {
    try {
        const response = await api.post(SIGNUP_URL, data);
        return response;
    } catch (error) {
        console.error("Error in async_signup:", error);
        return error.response;
    }
}

export const async_verify_email = async (code) => {
    try {
        const response = await api.get(`${VERIFY_EMAIL_URL}?code=${code}`);
        return response;
    } catch (error) {
        console.error("Error in async_verify_email:", error);
        return error.response;
    }
}