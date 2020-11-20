import React from "react";
import { Redirect } from "react-router-dom";

import { authenticationService } from '../_services';

class Aboutus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
           
        };
    }

   

    render() {
        const abousContainer = {
            fontSize:"16px",
            color: "#5e5e7d"

        }
        const { currentUser} = this.state;
        const pageName={
            textAlign: "center",
             fontSize: "24px",
             fontWeight: "bold",
             color: "black",
             marginBottom: "24px"
         };
        return (
            <div className="container">
            <div style={abousContainer}>
                   <div style={pageName}>About Us</div>
            <p>The First Digital Bank (provisional name) is the first independent bank established in Israel in over 40 years. 
                Unlike the existing banks, which added a digital channel to their traditional operations, the Digital Bank is entirely digital, which means it has no physical branches.
            </p> 
            <p>The bank will offer advanced services, including flexible and competitive credit solutions, alongside standard banking services such as current accounts, credit, deposits, and securities management. 
                Being independent of the existing banking groups, the bank will offer, for the first time, a genuinely independent alternative, opening up the local banking industry to competition in a way that was never possible under the current banking model. 
            </p>
            <p>
                Operationally lean and with no branches or thousands of employees, the bank will offer mostly automated work processes built around innovative technological capabilities that focus primarily on customer needs. As a result, it would provide advanced services and service experience at competitive prices aligned with the new technological world.
            </p>
            </div>
            </div>
        );
    }
} 
            

export { Aboutus};
