import { ACTIONS } from "../actions/action";


const selectReducer = (state, {payload,type}) => {

    switch (type) {
        case ACTIONS.CHANGE:
            return state = payload ;
            
    
        default:
            return state;
    }
}

export default selectReducer