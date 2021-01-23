import { addUserFromServer } from "./actions"

export const wsUser = () => {
    return function(dispatch) {
        const ws = new WebSocket('ws://testapi.marit.expert:3004')
        ws.onopen = () => {
            alert('Loading...')
            ws.send({cmd:"get_list"})
        }
        ws.onmessage = message => {
            const data = JSON.parse(message.data)
            dispatch(addUserFromServer(data))
        }
        ws.onclose = () => console.log('DISCONNECTED')
    }
}