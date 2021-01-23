export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_USER_FROM_SERVER = 'ADD_USER_FROM_SERVER'

export const addUserFromServer = (user) => {
    return {
        type: ADD_USER_FROM_SERVER,
        payload: user
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}