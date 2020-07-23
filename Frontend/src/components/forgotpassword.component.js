import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class forgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password?</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Send Password</button>
                <p className="forgot-password text-right">
                    <a><Link to={"/sign-in"}>Go back to Login Page</Link></a>
                </p>

            </form>
        );
    }
}
