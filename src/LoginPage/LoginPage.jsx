import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../Images/Logo.png';
import { authenticationService } from '../_services';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
        if (authenticationService.currentUserValue) {
            
            this.props.history.push('/');
        }
    }

    render() {
        const loginStyle ={
            margin: "auto"
        };
        const loginButton={
           
                backgroundColor: "#343a40",
                marginTop: "10px",
                color: "#fff",
                border: "none"
             }
        const jarvisMainHeader ={
            display : "flex",
            justifyContent: "space-between",
            padding: "15px",
            background: "#cdcdcd",
            color: "black",
            fontFamily: "Sans-serif"
        };
        const imgStyle ={
            width: "80px",
            height: "80px"
        };
        const appName ={
            margin: "auto",
            fontSize: "24px",
            fontWeight: "bold"
        };
        const loginHead ={
            marginTop: "8vw"
        };
        return (
            <div >
                <div style={jarvisMainHeader}>
                                 <img src={logo} style={imgStyle}/>
                                 <div style={appName}>Jarvis</div>
                            </div>
                <div style={loginStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                <h2 className="text-center" style={loginHead}>Login</h2>
                <Formik
                    className="formik"
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onSubmit={({ username, password }, { setStatus }) => {
                        setStatus();
                        authenticationService.login(username, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                                    this.props.history.push(from);
                                },
                                error => {
                                    
                                    setStatus("Username or Password is incorrect");
                                   
                                }
                            );
                    }}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" ref="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" ref="uerror" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary" style={loginButton} >Login</button>
                                
                            </div>
                            {status &&
                                <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                />
               
                                </div>
               </div>
               </div>
               </div>
            </div>
        )
    }
}

export { LoginPage }; 