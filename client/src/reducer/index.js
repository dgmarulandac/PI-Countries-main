const initialState = {
    countries : [],
    allCountries: [],
    activities: [],
    
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_CONTRIES':
            return{
                ...state,
                countries:action.payload,
                allCountries: action.payload
            }
            case 'FILTER_BY_CONTINENT':
                const allCountries = state.allCountries
                const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continente === action.payload)
                return{
                    ...state,
                    countries: statusFiltered
                }
                case 'FILTER_BY_ACTIVITIES':
                    const filtredCountriesByActivities = state.allCountries
                    const continentFilteredBA = filtredCountriesByActivities.filter((c) => { return c.activities.find((c) => { return c.name === action.payload; }); });

                    if (action.payload === 'todos') {
                        return { ...state, countries: filtredCountriesByActivities }
                    } else {
                        return {
                            ...state,
                            countries: continentFilteredBA
                        }
                    }
                
            default:
                return state;
    }

}

export default rootReducer;