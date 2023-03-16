import { combineReducers } from "redux"
import cart from "./cart"
import heart from "./heart"
import user from "./user"

const rootReducers = combineReducers({
    user,
    heart,
    cart,
    
})

export default rootReducers