import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/articles.scss';
import '../assets/styles/shared.scss';
import Header from './layouts/Header';
import PropTypes from 'prop-types';
import { fetchArticles } from '../actions/articles';

export class Articles extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <>
                <Header />
                <div className="articles-component section-spacing">
                    <div className="component-heading1">All Articles</div>
                    <div className="row">
                        <div className="col-xl-8">
                            <article className="article">
                                <div className="feature-img">
                                    <img src={require('../assets/images/article-sample.svg')} alt="" />
                                </div>
                                <div className="details">
                                    <div className="tag"><span className="hash">#</span>sensima</div>
                                    <h2 className="title">The worst volume control UI in the world</h2>
                                    <div className="description">npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.</div>
                                    <div className="others">
                                        <div className="author-time">
                                            <div className="info author">by Patricia Morgan on Oct, 12, 2019</div>
                                        </div>
                                        <div className="actions">
                                            <div className="Fav">
                                                <input id="fav-checkbox" className="Fav-checkbox" type="checkbox" />
                                                <label htmlFor="fav-checkbox" className="Fav-label"><span className="Fav-label-text">Favourite</span></label>
                                                <div className="Fav-bloom"></div>
                                                <div className="Fav-sparkle">
                                                    <div className="Fav-sparkle-line"></div>
                                                    <div className="Fav-sparkle-line"></div>
                                                    <div className="Fav-sparkle-line"></div>
                                                    <div className="Fav-sparkle-line"></div>
                                                    <div className="Fav-sparkle-line"></div>
                                                </div>
                                                <svg className="Fav-star" xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 26 22">
                                                    <title>heart Icon</title>
                                                    <path d="M24,6.7060241 C24,10.1518072 21.0495868,13.0144578 20.9256198,13.146988 L12.5950413,21.7349398 C12.446281,21.8939759 12.2231405,22 12,22 C11.7768595,22 11.5785124,21.9204819 11.4049587,21.7349398 L3.04958678,13.1204819 C2.95041322,13.0144578 0,10.1518072 0,6.7060241 C0,2.51807229 2.40495868,0 6.39669421,0 C8.75206612,0 10.9338843,1.98795181 12,3.10120482 C13.0661157,1.98795181 15.2479339,0 17.6033058,0 C21.6198347,0 24,2.51807229 24,6.7060241 L24,6.7060241 Z" id="path-1"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="article">
                                <div className="feature-img">
                                    <img src={require('../assets/images/article-sample.svg')} alt="" />
                                </div>
                                <div className="details">
                                    <div className="tag"><span className="hash">#</span>sensima</div>
                                    <h2 className="title">The worst volume control UI in the world</h2>
                                    <div className="description">npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.</div>
                                    <div className="others">
                                        <div className="author-time">
                                            <div className="info author">by Patricia Morgan on Oct, 12, 2019</div>
                                        </div>
                                        <div className="actions"></div>
                                    </div>
                                </div>
                            </article>
                        
                        
                        </div>
                        <div className="col-xl-4"></div>
                    </div>
                </div>
            </>
        )
    }
}


Articles.propTypes = {
    articles: PropTypes.array.isRequired,
    fetchArticles: PropTypes.func.isRequired
}

const mapstateToProps = state => ({
    articles: state.articles.articles
})

export default connect(mapstateToProps, { fetchArticles })(Articles)