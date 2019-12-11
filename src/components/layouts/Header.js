import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../assets/styles/layouts/header.scss';
import '../../assets/styles/shared.scss';

export class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-12">
                    <header>
                        <div className="nav-cover">
                            <div className="logo">LOGO</div>
                            <nav className="menu">
                                <div className="each-menu text">Already have an account?</div>
                                <button type="button" className="bttn dye small">Login</button>
                            </nav>
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
