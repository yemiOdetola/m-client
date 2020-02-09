import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../assets/styles/components/register.scss';
import Header from './layouts/Header';
import PropTypes from 'prop-types';
import Loader from './utils/Loader';
import { register } from '../actions/auth';

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            password2: '',
            bio: '',
            loading: false
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };
    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        if (this.state.password !== this.state.password2) {
            return alert('password did not match');
        }
        let payload = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            bio: this.state.bio
        }
        this.props.register(this.props, payload);
    }
    componentDidMount() {
        if (localStorage.getItem('mcUserToken')) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <>
                <Header />
                <Loader loading={this.state.loading} />
                <div className="form-component">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="kard mt-5">
                                <div className="form-heading  mt-2 mb-5">
                                    Let’s get you ready on journey in reading articles that fits your situation and goals.
                                </div>
                                <div className="form-container">
                                    <form onSubmit={this.submitForm}>
                                        <div className="form-item">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" id="username"
                                                onChange={e => this.handleChange("username", e.target.value)} />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" name="email" id="email"
                                                onChange={e => this.handleChange("email", e.target.value)} />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="name">Full name</label>
                                            <input type="text" name="name" id="name"
                                                onChange={e => this.handleChange("name", e.target.value)}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password"
                                                onChange={e => this.handleChange("password", e.target.value)} />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="confirm_password">Confirm password</label>
                                            <input type="password" name="confirm_password" id="confirm_password"
                                                onChange={e => this.handleChange("password2", e.target.value)} />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="bio">About you</label>
                                            <textarea rows="5" name="bio" id="bio"
                                                onChange={e => this.handleChange("bio", e.target.value)}>
                                            </textarea>
                                        </div>
                                        <button disabled={this.state.loading} type="button" onClick={this.submitForm} className="bttn primary mt-5 mx-auto">Submit</button>
                                    </form>
                                    <div className="auth-extra">Already have an account? <Link to='/login'>Login</Link></div>
                                    <div className="auth-extra mt-3">By signing up, we assume you agree to our terms and usage policy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </>
        )
    }
}


Register.propTypes = {
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(Register)