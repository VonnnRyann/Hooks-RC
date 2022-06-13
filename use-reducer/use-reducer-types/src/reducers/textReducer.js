import ACTION from "../actions/action";

const textReducer = (text, {type,payload}) => {
    switch (type) {
        case ACTION.GRAB:
            return text = payload;
            
        case ACTION.RESET:
            return text = '';
    
        default:
            text;
    }
}

export default textReducer