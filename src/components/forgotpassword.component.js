import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

export default class forgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {
                email: '',
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

            default:
              break;
        }
        this.setState({errors, [nam]: val});

    }
    
    handleSubmit(event) {
        
        console.log(this.state.email)
        event.preventDefault();
    }
    
    render() {
        const {errors} = this.state;
        const isEnabled = validEmailRegex.test(this.state.email); 

        return (
            <form>
                <h3>Forgot Password?</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                     name="email" value={this.state.email} onChange={this.myChangeHandler}
                    />
                    {errors.email.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "15px" }}>{errors.email}</span>
                    }
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" disabled={!isEnabled}>Send Password</button>
                <p className="forgot-password text-right">
                    <a><Link to={"/sign-in"}>Go back to Login Page</Link></a>
                </p>

            </form>
        );
    }
}
