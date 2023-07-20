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


export function filterCountriesByContinent(payload) {
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function filterCountriesByActivity(payload) {
    return {
        type: 'FILTER_BY_ACTIVITIES',
        payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

/*
export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/activity');
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: json.data
            })
        } catch (error) {
            alert('No hay actividades')
            console.log(error)
        }
    }
}*/

/*
export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/activity');
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: json.data
            })
        } catch (error) {
            alert('Activitys No Found')
            console.log(error)
        }
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: 'POST_ACTIVITIES',
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries/' + id);
            return dispatch({
                type: 'DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function restartDetail() {
    return (dispatch) => {
        dispatch({ type: 'RESET' })
    }
}
*/

