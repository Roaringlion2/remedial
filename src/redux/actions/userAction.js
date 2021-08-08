import Axios from 'axios'

export const login = (email, data) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users?email=${email}`)
            .then(res => {
                if (res.data.length !== 0) {
                    return dispatch({
                        type: 'USERNAME_EMAIL_EXIST'
                    })
                }
                // post data user baru
                Axios.post('http://localhost:2000/users', data)
                    .then(res => {
                        return dispatch({
                            type: 'LOGIN',
                            payload: res.data[0]
                        })
                    })
            })
    }
}

export const logout = () => {
    return (dispatch) => {

        localStorage.removeItem('idUser')

        return dispatch({
            type: 'LOG_OUT'
        })
    }
}