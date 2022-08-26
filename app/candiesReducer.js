import axios from "axios";

const SET_CANDIES = 'SET_CANDIES';


//action creator
const _setCandies = candies => ({
    type: SET_CANDIES,
    candies
})

//thunk
export const fetchCandies = () => {
    return async (dispatch) => {
        const {data: candies} = await axios.get('/api/candies');
        dispatch(_setCandies(candies));
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case SET_CANDIES:
            return action.candies;
        default:
            return state
    }
}