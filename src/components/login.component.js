import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import forgotPassword from "./forgotpassword.component";

export default class Login extends Component {
    render() {
        return (<Router>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">Forgot Password ?
                    {/* <a><Link to={"/forgot-password"}>Forgot Password?</Link></a> */}
                </p>

          {/* <Switch>
            <Route path="/forgot-password" component={forgotPassword} />
          </Switch> */}
            </form>
            </Router>
        );
    }
}
