import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        let errors = this.state.errors;

            switch (nam) {
            
                case 'email': 
                errors.email = 
                    validEmailRegex.test(val)
                    ? ''
                    : 'Email is not valid!';
                break;

                case 'password': 
                errors.password = 
                    val.length < 6
                    ? 'Password must be at least 6 characters long!'
                    : '';
                break;

                default:
                break;
            }
        this.setState({errors, [nam]: val});

    }
   
    handleSubmit(event) {
        
        console.log(this.state.email , this.state.password)
        event.preventDefault();
    }  

    handleOnClick = () => {
        this.setState({redirect: true});
      }
   
 
    render() {
        const {errors} = this.state;
        const isEnabled = validEmailRegex.test(this.state.email)  && this.state.password.length >= 6; 

        if (this.state.redirect) {
            return <Redirect push to="/home-page" />;
          }
    
        return (
            <form onSubmit={this.handleSubmit}> 
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    name="email" value={this.state.email} onChange={this.myChangeHandler}
                    />
                    {errors.email.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
                    }
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                     name="password" value={this.state.password} onChange={this.myChangeHandler}
                    />
                    {errors.password.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.password}</span>
                    }
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={!isEnabled}
                 onClick={this.handleOnClick }>Submit</button>

                <p className="forgot-password text-right">
                    <a><Link to={"/forgot-password"}>Forgot Password?</Link></a>
                </p>

            </form>

            
        );
    }
}
