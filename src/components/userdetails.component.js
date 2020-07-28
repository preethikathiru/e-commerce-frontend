import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const validateAlpha = RegExp(
    /^[A-Za-z]+$/
    );

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            address: '',
            errors: {
                fname: '',
                lname: '',
                address: '',
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
            case 'fname':
                errors.fname =
                validateAlpha.test(val) 
                  ? ''
                  : 'First name is invalid';  
                break;

            case 'lname':
                    errors.lname =
                    validateAlpha.test(val) 
                      ? ''
                      : 'Last name is invalid';  
                    break;

            case 'address':
                     errors.address =
                     val.length < 25 
                         ? 'Address must be at least 25 characters long!'
                         : '';  
                    break;                                                       
              
            default:
              break;
        }
        this.setState({errors, [nam]: val});

    }

    handleSubmit(event) {
        
        console.log(this.state.fname ,this.state.lname, this.state.address)
        event.preventDefault();
    }
  
   
    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>User Details</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" minLength='3' placeholder="Enter First name" name="fname"
                     value={this.state.fname} onChange={this.myChangeHandler} 
                    />
                    {errors.fname.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "15px" }}>{errors.fname}</span>
                    }
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" minLength='3' placeholder="Enter Last name" name="lname" 
                     value={this.state.lname} onChange={this.myChangeHandler}
                    />
                    {errors.lname.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "15px" }}>{errors.lname}</span>
                    }
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea rows="3" cols="25" placeholder="Enter Address here" type="text" className="form-control"  name="address"
                     value={this.state.address} onChange={this.myChangeHandler}
                    />
                    {errors.address.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "15px" }}>{errors.address}</span>
                    }
                </div>

               
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>

            
        );
    }
}
