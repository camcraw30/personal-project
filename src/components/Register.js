import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {updateUser} from "../redux/reducers/userReducer";

class Register extends Component {
    constructor() {
        super() ;
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    registerUser = e => {
        axios.post("/auth/user/new", {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            this.props.updateUser(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    loginUser = e => {
        axios.post("/auth/user/login", {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            this.props.updateUser(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    logoutUser = e => {
        axios.post("/auth/user/logout")
    }

    render() {
        return (
            <div>
                <input placeholder="first_name" onChange={e => this.setState({
                    firstName: e.target.value
                })}></input>
                <input placeholder="last_name" onChange={e => this.setState({
                    lastName: e.target.value
                })}></input>
                <input placeholder="email" onChange={e => this.setState({
                    email: e.target.value
                })}></input>
                <input placeholder="password" type="password" onChange={e => this.setState({
                    password: e.target.value
                })}></input>
                <button onClick={this.registerUser}>Register</button>
                <button onClick={this.loginUser}>Log In</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {updateUser})(Register);