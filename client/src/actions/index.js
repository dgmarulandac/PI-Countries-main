import axios from  'axios';

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_CONTRIES',
            payload: json.data
        })
    }
}