
const initialState = {
    allCountries: [],
    countries : [],
    detail : [],
    name :[]
}
function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
           case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload,

            }
            case 'GET_NAME':
            return {
                ...state,
                countries: action.payload
            }
            case 'POST_ACTIVITY':
            return {
                ...state,
            }
            case 'FILTER_COUNTRIES_CONTINENT':
                const allCountries = state.allCountries;
                const statusFilter = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continente === action.payload)
                return {
                ...state,
                countries: statusFilter
            }
            
            default:
        return state;
    }
    
}
export default rootReducer;