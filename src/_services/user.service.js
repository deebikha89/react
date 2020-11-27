import { authHeader, handleResponse } from '../_helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { 
        method: 'GET',
         headers: authHeader()
        };
    return fetch(`https://dev-8911289.okta.com/api/v1/users`, requestOptions).then(handleResponse);

}