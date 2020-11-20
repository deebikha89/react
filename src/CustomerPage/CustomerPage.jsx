import React from "react";
import { Redirect } from "react-router-dom";

import { authenticationService } from '../_services';

class CustomerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            data: 9875641235,
            gender: "Female",
            resAddress: "94 Elm St.Crown Point, IN 46307",
            shipAddress: "7831 Corona St.Florence, SC 29501",
            emailId: "newtonisac@yahoo.in",
            dateOfBirth: "2000-07-22"
           
        };
    }

   

    render() {
        const accessRole = localStorage.getItem('role');
        console.log("CURENT USER IS", this.state.currentUser);
        const { currentUser} = this.state;
        const pageName={
            textAlign: "center",
             fontSize: "24px",
             fontWeight: "bold",
             marginBottom: "24px"
         };
         const firstDetails ={
            display: "flex",
            marginBottom: "24px"
         };
         const labeltag ={
            padding: "0 8px",
            color: "black",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            width: "45%"

         };
         const personalDetails ={
                border: "1px solid #cdcdcd",
                borderRadius: "5px",
                padding: "20px",
                
         };
         const detailsDiv ={
            width: "40%",
            display: "flex"
         };
         const inputstyle ={
             height: "fit-content"
         };
         const personalDiv ={
            width: "40%"
         };
         const personaleHead ={
             color: "#e60000",
             fontSize: "18px",
             textDecoration: "underline",
             textAlign: "center",
             marginBottom: "12px"
         };
         const cusDetailsName ={
             color: "#272727",
             fontSize: "16px",
             fontWeight: "500",
             textAlign: "center",
             paddingBottom: "5px"
         }
         const userDetails ={
                display: "flex"
         };
         const updateCusdetails={
            backgroundColor: "#343a40",
            marginTop: "10px",
            color: "#fff"
         }
        
        return (
            <div className="container">
            <div>
                   <div style={pageName}>Customer Details</div>
                   <div style={cusDetailsName}>Isaac Newton</div>
                   
            <div className="personalDetails col-lg-12 col-md-12 col-xs-12" style={personalDetails}>
            <div style={personaleHead}>Personal Details</div>
                <div style ={userDetails}>
                <div style={personalDiv}> 
                    <div>
                        <label style={labeltag}>Phone Number</label>
                        <input type="tel" placeholder="9123456789" disabled={accessRole!="Admin"} defaultValue={this.state.data}></input>
                    </div>
                    <div
                    ><label style={labeltag} style={labeltag} >Gender</label>
                    <select disabled><option value="Male" >Male</option><option value="Female" >Female</option><option value="Rather not Say">Rather nor say</option></select>
                    </div>
                    <div ><label style={labeltag} >Marital Status</label><select disabled={accessRole!="Customer Care"} ><option value="Married">Married</option><option value="Unmarried" selected>Unmarried</option></select></div>
                    
                 </div>
                 <div style={personalDiv}>
                 <div ><label style={labeltag}>Residence Address</label><input type="text" placeholder="Address" disabled={accessRole!="Admin"} defaultValue={this.state.resAddress}></input></div>
                    <div ><label style={labeltag}>Date of Birth</label><input type="date" disabled={accessRole!="Admin"} defaultValue={this.state.dateOfBirth} ></input></div>
                    <div ><label style={labeltag}>Joined Date</label><input type="date" value="2020-01-15" disabled></input></div>
                 </div>
                 <div style={personalDiv}>
                 <div><label style={labeltag}>Shipping Address</label><input type="Address" placeholder="Address" disabled={accessRole=="Sales Executive"} defaultValue={this.state.shipAddress}></input></div>
                 <div ><label style={labeltag}>Email</label><input type="email" id="email" name="email" disabled={accessRole=="Sales Executive"}defaultValue={this.state.emailId}></input></div>
                 </div>
                 </div>
                
            </div>
            <div className="text-center"><button style={updateCusdetails}>Update</button></div>
            </div>
            </div>
        );
    }
} 
            

export { CustomerPage };
