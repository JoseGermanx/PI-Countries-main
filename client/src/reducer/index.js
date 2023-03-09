
const initialState = {
    allCountries: [],
    countries : [],
    detail : [],
    name :[],
    flag: [],
    allActivities: [],
    maps: [],
    season: []
}
function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_FLAGS':
            return {
                ...state,
                flag: action.payload
            }
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
                countries: action.payload,
                allCountries: action.payload
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
            case 'FILTER_COUNTRIES_POPULATION':
                const sortPopulation = action.payload === "may" ?
                state.countries.sort((a, b) => b.poblacion - a.poblacion)
                : state.countries.sort((a, b) => a.poblacion - b.poblacion)
                console.log(sortPopulation)
                return {
                    ...state,
                countries: sortPopulation
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
                    
                }) :
                state.countries.sort(function (a, b) {
                    if ( a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    countries: sortArr
                }
                case "GET_ACTIVITY":
                    return {
                        ...state,
                        allActivities: action.payload
                    }
                    case "GET_SEASON":
                    return {
                        ...state,
                        season: action.payload

                    }
                    case 'BY_ACTIVITY':                   
                    const activityFilter = action.payload === 'All' ? state.allCountries:
                    state.allCountries.filter(c => c.activities.find((element) => element.nombre === action.payload))
                    console.log(activityFilter)
                   return {
                   ...state,
                   countries: activityFilter
                   }
                   case 'BY_SEASON':                   
                    const seasonFilter = action.payload === 'All' ? state.allCountries:
                    state.allCountries.filter(c => c.activities.find((element) => element.temporada === action.payload))
                    console.log(seasonFilter)
                   return {
                   ...state,
                   countries: seasonFilter
                   }
                   case 'GET_MAPS':
                    return {
                        ...state,
                        maps: action.payload
                    }
            default:
        return state;
    }
    
}
export default rootReducer;