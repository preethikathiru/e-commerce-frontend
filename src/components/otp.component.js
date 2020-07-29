import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css';
import {Redirect} from 'react-router-dom';

export default class OtpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            errors: {
                otp: '',
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    myChangeHandler = e => {
        let otp = e.target.value;

        if (!Number(otp)) {
            return;
        }
        this.setState({
            [e.target.name]: otp
        });
    };
    
    handleSubmit(event) {
        
        console.log(this.state.otp)
        event.preventDefault();
    }

    handleOnClick = () => {
        this.setState({redirect: true});
      }
   
    render() {
        const {errors} = this.state;
        const isEnabled = this.state.otp.length == 4; 

        if (this.state.redirect) {
            return <Redirect push to="/user-details" />;
          }   
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Email Verification</h3>

                <div className="form-group">
                    <label>Enter OTP</label>
                    <div id="divOuter">
	                    <div id="divInner" >
                            <input id="partitioned" type="tel" maxlength="4" name="otp" 
                            value={this.state.otp} onChange={this.myChangeHandler}  />
                             {errors.otp.length > 0 && 
                                 <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.otp}</span>
                             }
	                    </div>
                    </div>                   
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" 
                disabled={!isEnabled}
                onClick={this.handleOnClick}
                >Submit</button>
                <p className="forgot-password text-right">
                    <a><Link to={"/sign-up"}>Go back to Signup Page</Link></a>
                </p>

            </form>
        );
    }
}
