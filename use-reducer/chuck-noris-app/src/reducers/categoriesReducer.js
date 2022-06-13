import { ACTIONS } from "../actions/action";


const categoriesReducer = (state, {payload,type}) => {

    switch (type) {
        case ACTIONS.GET_CATEGORIES:
            return state = payload;
        case ACTIONS.ERROR:
            return state = payload;
            
    
        default:
            return state;
    }
}

export default categoriesReducer