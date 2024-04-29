// api instance for the drf backend
import axios from "axios";

export const BASE_URL = "https://animated-funicular-jp49gw99w95c5wj4-8000.app.github.dev/";

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
// create recruiter profile
const RECRUITER_URL = "/api/recruiters/";
const ORG_URL = "/api/organizations/";

// get user info
const USER_INFO_URL = "/api/accounts/users/me";
// add more

// functions

const GET_CANDIDATES_URL = "/api/candidates/";

const JOB_URL = "/api/jobs/";


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

export const async_get_jobs_info = async (jobId = null) => {    
    try {
        const url = jobId ? `${JOB_URL}${jobId}/` : JOB_URL;
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error in async_get_jobs_info:", error);
        return null;
    }
}

// export const async_get_candidates = async () => {
//     try {
//         const response = await api.get(GET_CANDIDATES_URL);
//         return response.data;
//     } catch (error) {
//         console.error("Error in async_get_candidates:", error);
//         return null;
//     }
// }

export const async_create_recruiter_profile = async (user_id) => {
    try {
        // first create a sample organization
        const org_response = await api.post(ORG_URL, {
            org_name: "Your Organization",
        });
        console.log(org_response.data)
        // then create a recruiter profile
        const response = await api.post(RECRUITER_URL, {
            user_id: user_id,
            org_id: org_response.data.org_id,
        });
        if (response.status === 201) {
            console.log("Recruiter profile created successfully");
            return response.data;
        }
        return null;
    }
    catch (error) {
        console.error("Error in async_create_recruiter_profile:", error);
        return null;
    }
}

export const async_get_recruiter = async (user_id) => {
    try {
        const responses = await api.get(`${RECRUITER_URL}`);
        // manually check if the user_id matches
        for (let i = 0; i < responses.data.length; i++) {
            if (responses.data[i].user_id === user_id) {
                return responses.data[i];
            }
        }
        return null;
    } catch (error) {
        console.error("Error in async_get_recruiter:", error);
        return null;
    }
}

export const async_get_candidates = async (jobId = null) => {
    try {
      let url = '/candidates/';
      if (jobId !== null) {
        url += `?job_id=${jobId}`;
      }
  
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
