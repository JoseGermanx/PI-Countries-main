
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
            case 'ORDER_NAME':
                const sortArr = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if ( a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0
                    
                }) : action.payload === 'des' ?
                state.countries.sort(function (a, b) {
                    if ( a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                }) : allCountries;
                return {
                    ...state,
                    countries: sortArr
                }
            
            default:
        return state;
    }
    
}
export default rootReducer;