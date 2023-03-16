import { LOG_IN, LOG_OUT } from "../action/actionType"

const user = (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return state = action.payload
        case LOG_OUT:
            return state = null
        default:
            return state
    }
}

export default user