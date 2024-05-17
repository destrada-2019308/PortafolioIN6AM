import axios from 'axios'
//Consulta al backend
//Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:2656',
    timeout: 5000
})

//Interceptor para inyectar el token si esta loggeado
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if(token)config.headers.Authorization = token
        return config
    },
    err => Promise.reject(err)
)

//Ya puedo crear consultas con el apiClient

export const loginRequest = async(user) =>{
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

export const getPostsRequest = async() =>{
    try {
        return await apiClient.get('/post/getPosts')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updatePostRequest = async(id, post) =>{
    try {
        return await apiClient.put(`/post/updatePost/${id}`, post)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

export const deletePostRequest = async(id) => {
    try {
        return await apiClient.delete(`/post/deletePost/${id}`)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}