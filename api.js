// api instance for the drf backend
import axios from "axios";

const BASE_URL = "https://animated-funicular-jp49gw99w95c5wj4-8000.app.github.dev/";

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

// get user info
const USER_INFO_URL = "/api/user_detail";
// add more

// functions

export const async_login = async (email, password) => {
    console.log(email, password);
    try {
        const response = await api.post(LOGIN_URL, {
            email: email,
            password: password,
        });
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
        }
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

// not async since we cannot load the page without user info
export const get_user_info = async () => {
    try {
        // at AUTHORIZATION token in header
        const response = await api.get(USER_INFO_URL, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in api.js::get_user_info:", error);
        return null;
    }
}