import React from 'react';

import { userService, authenticationService } from '../_services';
// import PostsList from "../_components/PostsList";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        title: "Homepage",
        userService.getAll().then(users => this.setState({ users }));
        
    }

    render() {
        const { currentUser, users } = this.state;
        
        const pageName={
            textAlign: "center",
             fontSize: "24px",
             fontWeight: "bold",
             color: "black",
             marginBottom: "24px"
         };
        return (
            <div className="container">
                <div>
                      <div style={pageName} className="homePageContainer">Homepage</div>
                    <h1>Hi {currentUser.profile.firstName}!</h1>
                    <h3>Users listed below are from secure api end point</h3>
                    {users &&
                        <ul>
                            {users.map((user,index) =>
                                <li key={index}>{user.profile.firstName} {user.profile.lastName}</li>
                            )}
                        </ul>
                    }
                
                    {/* <PostsList user={currentUser,roleDef}/> */}
           
                </div>
            </div> 
                  
        );
    }
}

export { HomePage };