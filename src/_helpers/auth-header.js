import { authenticationService } from '../_services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { 'Authorization': 'SSWS 001ZCEQDVeufio7V1UmxVuO876s9JoSdC4S6nQtNID'};
    } else {
        return {'Authorization': 'SSWS 001ZCEQDVeufio7V1UmxVuO876s9JoSdC4S6nQtNID'};
    }
}