import { ADD_TO_HEART, REMOVE_FROM_HEART } from "../action/actionType"

const heart = (state = [], action) => {
    // console.log(state);
    // console.log(action.type);
    // console.log(action.payload);
    switch (action.type) {
        case ADD_TO_HEART:
            return state = action.payload
            
        case REMOVE_FROM_HEART:
            return state = state.filter(i => i._id !== action.payload)
        default:
            return state
    }
    

}

export default heart