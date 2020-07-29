import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

const validateAlpha = RegExp(
    /^[A-Za-z]+$/
    );

export default class UserDetails extends Component {

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
                    : 'First name should have only letters and at least 3 characters long!';  
                    break;

                case 'lname':
                        errors.lname =
                        validateAlpha.test(val) 
                        ? ''
                        : 'Last name should have only letters and at least 3 characters long!';  
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
      
    handleOnClick = () => {
        this.setState({redirect: true});
      }
      
   
    render() {
        const {errors} = this.state;
        const isEnabled = this.state.fname.length >= 3 && this.state.lname.length >= 3 && this.state.address.length >= 25; 

    if (this.state.redirect) {
        return <Redirect push to="/home-page" />;
    }

    return (
            <form onSubmit={this.handleSubmit} action="/home-page">
                <h3>User Details</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" minLength='3' placeholder="Enter First name" name="fname"
                     value={this.state.fname} onChange={this.myChangeHandler} 
                    />
                    {errors.fname.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.fname}</span>
                    }
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" minLength='3' placeholder="Enter Last name" name="lname" 
                     value={this.state.lname} onChange={this.myChangeHandler}
                    />
                    {errors.lname.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.lname}</span>
                    }
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea rows="3" cols="25" placeholder="Enter Address here" type="text" className="form-control"  
                    name="address" value={this.state.address} onChange={this.myChangeHandler}
                    />
                    {errors.address.length > 0 && 
                      <span className='error' style={{ color: "red", fontSize: "10px" }}>{errors.address}</span>
                    }
                </div>

               
                <button type="submit" className="btn btn-primary btn-block" disabled={!isEnabled}
                onClick={this.handleOnClick}>Submit</button><br></br>

                <button type="button" className="btn btn-primary" style={{backgroundColor:"gray", border:"gray", float:"inline-end"}} 
                onClick={this.handleOnClick}>Skip</button>

            </form>

            
        );
    }
}
