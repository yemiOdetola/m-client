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
                                        <div className="actions"></div>
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