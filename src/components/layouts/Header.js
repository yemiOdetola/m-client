import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../assets/styles/layouts/header.scss';
import '../../assets/styles/shared.scss';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        console.log(this.props.user);
    }

    toggleMenu = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div className="row">
                <div className="col-xl-12">
                    <header>
                        <div className="nav-cover">
                            <div className="logo">
                                <Link to="/">
                                    <img src={require('../../assets/images/logo-dark.svg')} alt="logo" />
                                </Link>
                            </div>
                            <nav className="menu">
                                <div className="each-menu text">Account</div>
                                <div className="each-menu text">Account</div>
                                <div className="each-menu text">Account</div>
                                <div className="each-menu text">Account</div>
                                <button type="button" className="bttn dye small">login</button>
                                <button type="button" className="bttn danger small">logout</button>
                            </nav>
                        </div>
                        <div className="mobile-menu">
                            <div className="logo">
                                <Link to="/">
                                    <img src={require('../../assets/images/logo-dark.svg')} alt="logo" />
                                </Link>
                            </div>
                            <nav className="menu" onClick={this.toggleMenu}>
                                <img src={require('../../assets/images/menu.svg')} alt="logo" />
                            </nav>
                        </div>
                        <div className={this.state.open ? "menu-items slide-in" : 'hide'}>
                            <div className="each">item</div>
                            <div className="each">item</div>
                            <div className="each">item</div>
                            <div className="each">item</div>
                            <button type="button" className="bttn dye small">Login</button>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, null)(Header);
