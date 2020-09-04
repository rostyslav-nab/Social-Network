import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2f5687fa-c8ce-42e6-ac5d-594a3169b38f'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`)
            .then(response=> response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response=> response.data)
    }
}



