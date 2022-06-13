import ACTION from '../actions/action'

const addToArrayReducer = (array, {type, payload}) => {

    switch (type) {
        case ACTION.ADD:
            return [...array, payload]
    
        default:
            return array;
    }
}
export default addToArrayReducer