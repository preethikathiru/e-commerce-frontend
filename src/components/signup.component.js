import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            fName: '',
            lName: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    
    handleSubmit(event) {
        alert('A phone was submitted: ' + this.state.phone);
        console.log(this.state.email ,this.state.fName, this.state.lName, this.state.phone, this.state.password)
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                        name="fName" value={this.state.fname} onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                        name="lName" value={this.state.lName} onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Mobile number</label>
                    <PhoneInput country={'in'} className="form-control"
                        name="phone" value={this.state.phone} onChange={value => this.state.phone = value}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                        name="email" value={this.state.email} onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        name="password" value={this.state.password} onChange={this.myChangeHandler}
                    />
                </div>

                <button type="submit" value="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a><Link to={"/sign-in"}>sign in?</Link></a>
                </p>
            </form>
        );
    }
}