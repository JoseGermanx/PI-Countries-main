
const initialState = {
    countries : [],
    detail : [],
    name :[]
}
function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
           case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload

            }
            case 'GET_NAME':
            return {
                ...state,
                countries: action.payload
            }
            default:
        return state;
    }
    
}
export default rootReducer;