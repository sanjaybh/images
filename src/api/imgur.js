import qs from 'qs';

const CLIENT_ID = "325a7c41cad7bf2";
const ROOT_URL = "https://api.imgur.com";

export default {
    login(){
        const querystring = {
            client_id : CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}



/*
https://api.imgur.com/oauth2/authorize?
client_id = '325a7c41cad7bf2'
    & response_type=REQUESTED_RESPONSE_TYPE
        & state=APPLICATION_STATE
*/