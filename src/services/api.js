import axios from 'axios';

export const api = axios.create({
    baseUrl: 'http://localhost:8082'
})


export const createSession = async(email, password) => {
    console.log(createSession)
    return api.post('http://localhost:8082/auth', {email, password})
}


export const getNotes = async() => {
    return api.get('http://localhost:8082/service/note/getAll')
}