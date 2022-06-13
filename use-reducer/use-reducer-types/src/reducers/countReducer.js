import ACTIONS from '../actions/action'


const x = 5;
const y = 3;

const countReducers = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + x;
        case ACTIONS.DECREMENT:
            return state - y;
        case ACTIONS.RESET:
            return state = 0; // or the payload
            
    
        default:
            return state;
    }
}

export default countReducers