import React from "react";
import { Redirect } from "react-router-dom";

import { authenticationService } from '../_services';
import Can from "../_components/Can";

import PostsList from "../_components/PostsList";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
           
        };
    }

   

    render() {
        const { currentUser} = this.state;
         const custableHead ={
             padding: "6px 0",
             color: "#000000",
             fontWeight: "bold",
             border: "3px solid #ddd",
             textAlign: "center",
             backgroundColor: "#cdcdcd"
         }
         const custableCol = {
            border: "3px solid #ddd",
            padding: "8px"
         };
         const pageName={
            textAlign: "center",
             fontSize: "24px",
             fontWeight: "bold",
             color: "black",
             marginBottom: "24px"
         };
         const cusListTable={
             textAlign: "center",
            
         };
         const buttonsearch ={
             marginLeft: "5px",
             backgroundColor: "#343a40",
             color: "#fff",
             borderRadius: "3px"
         };
         const customerTable ={
           marginBottom: "6vw"
         }
        return (
            <div>
            <div style={pageName} className="homePageContainer">Dashboard</div>
           
            <div style={cusListTable}><input type="text" placeholder="Search Customer"></input>
            <button type="submit" style={buttonsearch}>Search</button>
            </div>
            <div  style={pageName} >Customer List</div>
            <div className="container" style={customerTable}>
                <div className="row">
            
                <div style={cusListTable} className="col-md-6 offset-md-3">
                <table id="customers">
                <tbody>
                <tr>
                <th style={custableHead}>Customer Name</th>
                <th style={custableHead}>Mobile</th>
                <th style={custableHead}>Account Number</th>
                <th style={custableHead}>Contact</th>
                </tr>
               
                <tr>
                <td style={custableCol}>Alfreds Futterkiste</td>
                <td style={custableCol}>7894561232</td>
                <td style={custableCol}>76752526</td>
                <td style={custableCol}><button>call</button></td>
                </tr>
                <tr>
                <td style={custableCol}>Berglunds snabbköp</td>
                <td style={custableCol}>9356782916</td>
                <td style={custableCol}>78915655</td>
                <td style={custableCol}><button>call</button></td>
                </tr>
                <tr>
                <td style={custableCol}>Centro comercial Moctezuma</td>
                <td style={custableCol}>7532159785</td>
                <td style={custableCol}>78945612</td>
                <td style={custableCol}><button>call</button></td>
                </tr>
                <tr>
                <td style={custableCol}>Ernst Handel</td>
                <td style={custableCol}>8561234562</td>
                <td style={custableCol}>76542295</td>
                <td style={custableCol}><button>call</button></td>
                </tr>
                <tr>
                <td style={custableCol}>Island Trading</td>
                <td style={custableCol}>9567891235</td>
                <td style={custableCol}>75145235</td>
                <td style={custableCol}><button>call</button></td>
                </tr>
                </tbody>
                
                </table>
                </div>
                </div>
                </div>
            </div>
        );
    }
} 
            

export { DashboardPage };
