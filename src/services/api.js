import axios from 'axios';

export const api = axios.create({
    baseUrl: 'http://localhost:8082'
})


export const createSession = async (email, password) => {
    return api.post('http://localhost:8082/auth', {
        email,
        password
    })
}

export const createNote = async (title, description) => {
    return api.post('http://localhost:8082/service/note/new', {
        title,
        description
    }).catch(error => {
        console.log(error)
    })
}


export const edit = async (id) => {
    return api.put('http://localhost:8082/service/note/' + id, {

    }).catch(error => {
        console.log(error)
    })
}

export const deleteNote = async (id) => {
    return api.delete('http://localhost:8082/service/note/' + id, {

    }).catch(error => {
        console.log(error)
    })
}


export const getNotes = async () => {
    return api.get('http://localhost:8082/service/note/getAll').catch(error => {
        if (error.response.status === 401) {
            throw new Error("Token has been expirated, please, sign In again.")
        }
    })
}