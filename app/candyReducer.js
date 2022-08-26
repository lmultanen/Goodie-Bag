import axios from "axios";

const SET_CANDY = 'SET_CANDY'
const SET_QUANTITY = 'SET_QUANTITY'

const _setCandy = candy => ({
    type: SET_CANDY,
    candy
})

const _setQuantity = candy => ({
    type: SET_QUANTITY,
    candy
})

export const updateQuantity = (id, qty) => {
    return async (dispatch) => {
        const {data: candy} = await axios.put(`/api/candies/${id}`, {quantity: qty})
        dispatch(_setQuantity(candy))
    }
}

export const fetchCandy = (id) => {
    return async (dispatch) => {
        const {data: candy} = await axios.get(`/api/candies/${id}`)
        dispatch(_setCandy(candy))
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case SET_CANDY:
            return action.candy;
        default:
            return state
    }
}