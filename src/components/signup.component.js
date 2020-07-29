import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css' 
import {Redirect} from 'react-router-dom';



const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
 
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
            errors: {
                phone: '',
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
            case 'phone':
              errors.phone =
              val.length < 12 
                ? 'Not a valid number!'
                : '';
              break;

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
        
        console.log(this.state.email ,this.state.phone, this.state.password)
        event.preventDefault();
    }

    handleOnClick = () => {
      this.setState({redirect: true});
    }
 
    
    render() {
        const {errors} = this.state;
        const isEnabled = validEmailRegex.test(this.state.email)  && this.state.password.length >= 6 && this.state.phone.length >= 12; 
        
        if (this.state.redirect) {
          return <Redirect push to="/otp-page" />;
        }
  
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
               
                <div className="form-group">
                    <label>Mobile number</label>
                    <PhoneInput country={'in'} className="form-control" id="phone"
                        name="phone" value={this.state.phone} onChange={(value, data, event) => {
                            if(event.target){
                                event.target.name= "phone"
                                this.myChangeHandler(event)
                            }
                        }} 
                    />
                     {errors.phone.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.phone}</span>
                    }
                </div>

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

                <button type="submit" value="submit" className="btn btn-primary btn-block" disabled={!isEnabled}
                 onClick={this.handleOnClick}>SignUp</button>
                <p className="forgot-password text-right">
                    Already registered <a><Link to={"/sign-in"}>sign in?</Link></a>
                </p>
            </form>
        );
    }
}