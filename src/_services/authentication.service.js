import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    roleFetchTry,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
    
};


function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'SSWS 001ZCEQDVeufio7V1UmxVuO876s9JoSdC4S6nQtNID'}
        
        
    };  
    return fetch('https://dev-8911289.okta.com/api/v1/users/'+ username,requestOptions)
    .then(handleResponse)
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.roleFetchTry(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        console.log("users " +username);
         /*   let userRole =[{userid:"", userrole: ""}];*/
        // console.log("Calling roleFetch");
        // let roleUser=[] ;
         
        
        //console.log("Role assigned in  roleFetch"+roleUser[0].accessRole); 
        
        return user;
    });
}



var role =null;
let userRole= [];
function roleFetchTry(user)
{
        
            console.log("control in roleBasedAccess Method " +user.profile.login);
            var username = user.profile.login;
            
        if(username=="DKannan@digibank.co.il"){
            role ="Customer Care";
            userRole=[{"email":username,"accessRole":role}];
            console.log("role deebi " +userRole[0].accessRole);
            localStorage.setItem('role',userRole[0].accessRole);
                 
        }
        if(username=="rChowdary@Digibank.co.il"){
            role ="Admin";
            userRole=[{"email":username,"accessRole":role}];
            console.log("role renu " +userRole[0].accessRole);
            localStorage.setItem('role',userRole[0].accessRole);
        }
        if(username=="selumalai@Digibank.co.il"){
            role ="Sales Executive";
            userRole=[{"email":username,"accessRole":role}];
            console.log("role saranya" +userRole[0].accessRole);
            localStorage.setItem('role',userRole[0].accessRole);
        }
        
        return userRole;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expiry');
    localStorage.removeItem('role');
    currentUserSubject.next(null);
}
