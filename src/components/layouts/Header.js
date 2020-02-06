import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/styles/layouts/header.scss';
import '../../assets/styles/shared.scss';
import { profileDetails } from '../../actions/auth';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        if (!this.props.userDetails.username) {
            this.props.profileDetails();
        }
    }

    logout = () => {
        localStorage.setItem('mcUserToken', '');
        window.location.reload();
    }

    toggleMenu = () => {
        this.setState({ open: !this.state.open })
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
                                {this.props.userDetails._id ?
                                    <div className="user">
                                        <Link to={`/user/${this.props.userDetails._id}`}>Hi, {this.props.userDetails.username}</Link>
                                        <button type="button" className="bttn danger-pill ml-2 small" onClick={this.logout}>logout</button>
                                    </div>
                                    : <button type="button" className="bttn dye small"><Link to="/login">login</Link></button>
                                }
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
                            {this.props.userDetails._id ?
                                <div className="user">
                                    <Link to={`/user/${this.props.userDetails._id}`}>Hi, {this.props.userDetails.username}</Link>
                                    <button type="button" className="bttn danger-pill ml-2 small" onClick={this.logout}>logout</button>
                                </div>
                                : <button type="button" className="bttn dye small"><Link to="/login">login</Link></button>
                            }
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userDetails: state.auth.userDetails
})

export default connect(mapStateToProps, { profileDetails })(Header);
