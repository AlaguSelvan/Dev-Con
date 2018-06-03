import axios from 'axios';

// takes care of adding token to every request when u are logged in

const SetAuthToken = token => {
    if(token) { 
        //Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //Delete Auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default SetAuthToken;