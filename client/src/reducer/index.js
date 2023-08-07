const initialState = {
    countries : [],
    allCountries: [],
    activities: [],
    detail: []    
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_CONTRIES':
            return{
                ...state,
                countries:action.payload,
                allCountries: action.payload
            }

        case 'GET_NAME_COUNTRIES':
            return{
                ...state,
                countries:action.payload,

            };

        case 'CLEAN_DETAIL':
            return{
                ...state,
                detail: {}
            }    

        case 'GET_DETAILS':
            return{
                ...state,
                detail:action.payload
            }
                  

        case 'POST_ACTIVITIES':
            return{
                ...state
            }

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload

            }    

        case 'FILTER_BY_CONTINENT':
                const allCountries = state.allCountries
                const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continente === action.payload)
            return{
                    ...state,
                    countries: statusFiltered
                }

        case 'FILTER_BY_ACTIVITIES':
                const allCountries1 = state.allCountries
                const activitiesFiltered = action.payload === 'All' ? allCountries1 : allCountries1.filter((el) => { return el.activities.find((c) => { return c.name === action.payload; }); });
            return{
                    ...state,
                    countries: activitiesFiltered
                }

        case 'ORDER_BY_NAME':
            let sortArr = action.payload === 'asc' ?
                state.countries.sort(function(a,b){
                    if (a.name > b.name){
                        return 1;
                    }
                    if (b.name > a.name){
                        return -1;
                    }
                    return 0;
                }):
                state.countries.sort(function(a,b){
                    if (a.name > b.name){
                        return -1;
                    }
                    if (b.name > a.name){
                        return 1;
                    }
                    return 0; 
                });
                return{
                    ...state,
                    countries: sortArr
                }    
                
        case 'ORDER_BY_POPULATION':

                let sortPopulation = action.payload === 'Mayor' ?
                state.countries.sort(function(a,b){
                    if (a.poblacion > b.poblacion){
                        return -1;
                    }
                    if (b.poblacion > a.poblacion){
                        return 1;
                    }
                    return 0;
                }):
                state.countries.sort(function(a,b){
                    if (a.poblacion > b.poblacion){
                        return 1;
                    }
                    if (b.poblacion > a.poblacion){
                        return -1;
                    }
                    return 0; 
                });
                return{
                    ...state,
                    countries: sortPopulation
                }  
            
                  
                
        
                
            default:
                return state;

                
    }

}


export default rootReducer;