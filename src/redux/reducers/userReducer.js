const INITIAL_STATE = {
    id: null,
    email: "",
    password: "",
    transactions: [],
    errorRegister: [false, ''],
    successRegister: false,
    errLogin: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password,
                transactions: action.payload.transactions
            }
        case 'SUCCESS_REGISTER':
            return {
                ...state,
                successRegister: true
            }
        case 'USERNAME_EMAIL_EXIST':
            return {
                ...state,
                errorRegister: [true, 'Username or Email Already Exist']
            }
        case 'LOG_OUT':
            return INITIAL_STATE
        case 'ERR_LOGIN':
            return {
                ...state,
                errLogin: true
            }
        default:
            return state
    }
}

export default userReducer