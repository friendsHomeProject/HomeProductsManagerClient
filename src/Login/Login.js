import React, { Component } from 'react';
import axios from 'axios'

import './Login.scss';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    login(event) {
        event.preventDefault();
        axios.post(`http://localhost:59904/api/user/login?name=${this.state.name}&password=${this.state.password}`)
            .then(response => console.log(response));
    }

    render() {
        return (
            <div class="login">
                <form onSubmit={this.login}>
                    <label>
                        Name:
                        <br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
