import React from 'react';
import { BrowserRouter as Router, Route,Link, NavLink} from 'react-router-dom';

import { history } from '../_helpers';
import { authenticationService } from '../_services';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { DashboardPage } from '../DashboardPage';
import { CustomerPage } from '../CustomerPage';
import { ErrorPage } from '../ErrorPage';
import {Aboutus} from '../Aboutus';
import Can  from "../_components/Can";
import logo from '../../Images/Logo.png';
//import logo1 from '../favicon.ico';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            accessRole: "",

        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x, accessRole: localStorage.getItem('role') }));
       
        
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }
    

    render() {
        const imgStyle ={
            width: "80px",
            height: "80px"
        };
        const headerJarvis ={
            padding: "10px",
            color: "white",
            fontSize: "18px"
        };
        const jarvisMainHeader ={
            display : "flex",
            justifyContent: "space-between",
            padding: "15px",
            background: "#cdcdcd",
            color: "black",
            fontFamily: "Sans-serif"
        };
       
        const logout ={
            margin: "auto 0 auto",
            fontSize: "18px"
        };
        const cusPage ={
            margin: "auto 0 auto",
            fontSize: "18px"
        };
        const navLinks={
            padding: "5px"
        };
        const appName ={
            margin: "auto",
            fontSize: "24px",
            fontWeight: "bold"
        };
        const jarvisFooter = {
            bottom:"0",
            position: "fixed",
            background: "#cdcdcd",
            width:"100%",
            textAlign: "center",
            padding: "10px",
            fontWeight:"bold"
        }
        const { currentUser } = this.state;
        const { accessRole } = this.state;
        
        return (
            <Router>
                <div>
                    {currentUser &&
                        <div>
                            <div style={jarvisMainHeader}>
                                 <img src={logo} style={imgStyle}/>
                                 {/* <img src={logo} style={imgStyle}/> */}
                                 <div style={appName}>Jarvis</div>
                                <a onClick={this.logout} className=" float-right"  style={logout}>Logout</a>
                            </div>
                            

                        <div><span className="role d-block p-2 bg-dark text-white">ROLE ASSIGNED  - {accessRole}</span> </div>
                                 
                            <nav className="" style={headerJarvis}>
                            <div className="nav nav-pills">

                                <NavLink to="/" exact  activeClassName="active" className=" " style={navLinks}>Home</NavLink>
                                
                                <Can
                                    role={accessRole}
                                    perform="dashboard-page:visit"
                                    yes={() => (
                                        <NavLink to="/dashboard" exact  activeClassName="active" className="dashboardLink" style={navLinks} >Dashboard</NavLink>
                                        )}
                                />
                                <NavLink to="/cusdetails" className=" " style={navLinks} exact  activeClassName="active">CustomerPage</NavLink>
                                <NavLink to="/aboutus" className=" " style={navLinks}  exact  activeClassName="active">About Us</NavLink>
                               
                            </div>
                        </nav>
                        
                        </div>
                         
                    }
                
                                <div >
                                
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                                    <PrivateRoute path="/cusdetails" component={CustomerPage}/>
                                    <PrivateRoute path="/aboutus" component={Aboutus}/>
                                    <Route path="/login" component={LoginPage} />
                                    <PrivateRoute path="/error" component={ErrorPage} />
                                </div>
                            
                                <div className="footer" style={jarvisFooter}>© 2020 Copyright: Digibank</div>
                </div>
            </Router>
        );
    }
}

export {App}; 