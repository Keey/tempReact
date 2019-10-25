import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"203d7b01-11f9-4b18-8248-3dc4061ae015"}
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
    },

    getProfile(id, userProfile){
        console.warn('Obsolete Method. Please use profileAPi');
        return profileAPI.getProfile(id);
    }

}


export const profileAPI = {

    getProfile(id, userProfile){
        return instance.get(`profile/${id}`)
    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status: status} );
    }

}


export const authAPI = {
    me(){return instance.get(`auth/me`)}
}


