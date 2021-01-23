import { ADD_USER, DELETE_USER, UPDATE_USER, ADD_USER_FROM_SERVER } from './actions'
import { user_list } from './states'

export const reducer = (state = user_list, action) => {
    let newUser

    switch(action.type) {
        case ADD_USER_FROM_SERVER:
            newUser = [...state]
            newUser.push(...action.payload)
            return newUser
        case ADD_USER: 
            newUser = [...state]
            newUser.push(action.payload)
            return newUser
        case DELETE_USER:
            newUser = [...state]
            newUser = newUser.filter(user => user.id != action.payload)
            return newUser
        case UPDATE_USER:
            newUser = [...state]
            let index = -1
            for(let i = 0; newUser.length; i++) {
                index++
                if(newUser[i].id === action.payload.id) {
                    break;
                }
            }
            if(index !== -1) {
                newUser[index] = action.payload
                return newUser
            }
    }
    return state
}