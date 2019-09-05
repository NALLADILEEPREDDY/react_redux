import {FETCH_POST, ADD_POST} from '../_actions/actiontypes'
const intialState = {
    post : '',
    posts : []
}
export default function (state = intialState, action) {
    switch(action.type)
    {
        case FETCH_POST:
            return {
                ...state,
                posts : action.payload
            }
        case ADD_POST:
            return {
                ...state,
                post : action.payload
            }
        default:
            return state
    }
   
}
