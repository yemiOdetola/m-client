import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/landing.scss';
import Header from './layouts/Header';
import PropTypes from 'prop-types';
import { fetchTags } from '../actions/articles';

export class Landing extends Component {
    componentDidMount() {
        this.props.fetchTags();
    }
    render() {
        let tags = [];
        if (this.props.tags && this.props.tags[0]) {
            const fetchedTags = this.props.tags[0];
            fetchedTags.forEach((tag, index) => {
                tags.push(<div className="tag" key={index}><span className="hash">#</span>&nbsp; {tag}</div>)
            })
        }
        return (
            <>
                <Header />
                <div className="landing-component">
                    <div className="banner component-spacing">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="banner-text">
                                    <div className="tagline">Write. Read. Learn. Explore.</div>
                                    <div className="title">Mind reading 'til you forget dinner?   legooo! </div>
                                    <div className="intro-text">
                                        I really have nothing impressive or serious to put here RN, if you're seeing this, mbok, call my attention to it. 'LOL', maybe suggest something cool.
                                    </div>
                                </div>
                                <div className="banner-actions">
                                    <button className="bttn primary mr-2"><Link to="/register">Get started</Link></button>
                                    <Link className="bttn plain" to="/articles">See articles</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner-image">
                                    <img src={require('../assets/images/bg-home.svg')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tags-cover component-spacing">
                                <div className="component-heading1 mt-4 mb-3">Recently featured tags</div>
                                <div className="tags">
                                    {tags}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-mclone component-spacing">
                        <div className="component-heading1">Lets do this</div>
                        <div className="row">
                            <div className="col-xl-5 p-0 mt-3">
                                <div className="trial">Don't you feel like trying? ...c'mon</div>
                            </div>
                            <div className="col-xl-5 offset-xl-2">
                                <div className="each-row">
                                    <div className="item">
                                        <img src={require('../assets/images/surfer.svg')} alt="" />
                                        <div className="text">Explore</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('../assets/images/rotation.svg')} alt="" />
                                        <div className="text">Up-to-date</div>
                                    </div>
                                </div>
                                <div className="each-row">
                                    <div className="item">
                                        <img src={require('../assets/images/wireless.svg')} alt="" />
                                        <div className="text">Wildlin' responses</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('../assets/images/flame.svg')} alt="" />
                                        <div className="text">As e dhe hot</div>
                                    </div>
                                </div>
                                <div className="banner-actions mt-5">
                                    <button className="bttn primary"><Link to="/articles">See articles</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Landing.propTypes = {
    tags: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    tags: state.articles.tags
})


export default connect(mapStateToProps, { fetchTags })(Landing);