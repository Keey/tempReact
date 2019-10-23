import * as axios from "axios";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    timeout: 1000,
    headers: {"API-KEY":"5303e595-c5c4-4ec5-87ac-764f166380fa"}
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{withCredentials: true}).then(response => {
            return response.data
        })
    },

    unfollowUser(id){
        return instance.delete(`follow/${id}` , {
            withCredentials:true,
            headers: {
                "API-KEY":"5303e595-c5c4-4ec5-87ac-764f166380fa"
            }
        })
    },

    followUser(id){
        return instance.post(`follow/${id}`, {
            withCredentials:true,
            headers: {
                "API-KEY":"5303e595-c5c4-4ec5-87ac-764f166380fa"
            }
        })
    }
}


