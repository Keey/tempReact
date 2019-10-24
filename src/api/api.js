import * as axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // timeout: 1000,
    headers: {"API-KEY":"23b8f1d5-59f4-4c69-a90a-d38d55365af9"}
});

export const userAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    unfollowUser(id){
        return instance.delete(`follow/${id}`)
    },

    followUser(id){
        return instance.post(`follow/${id}`)
    }

}


