import { DEC_CART, INC_CART, REMOVE_FROM_CART,REMOVE_ALL_FROM_CART } from "../action/actionType"


const cart = (state = [], action) => {
    let index = state.findIndex(i => i._id === action?.payload?._id)
    switch (action.type) {
        case INC_CART:
            if (index === -1) {
                return [...state, { ...action.payload, soni: 1 }]
            } else {
                return state.map((item, inx) => inx === index ? { ...item, soni: item.soni + 1 } : item)
            }
        case DEC_CART:
            if (index === -1) {
                return [...state, { ...action.payload, soni: 1 }]
            } else {
                return state.map((item, inx) => inx === index ? { ...item, soni: item.soni - 1 } : item)
            }
        case REMOVE_FROM_CART:
            return state = state.filter(i => i._id !== action.payload._id)
            case REMOVE_ALL_FROM_CART: return state = []
        default:
            return state
    }
}

export default cart