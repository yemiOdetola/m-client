import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/landing.scss';
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
                <div className="articles-component">
                    <div className="component-heading1">All Articles</div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="each-article">
                                <div className="feature-img"></div>
                                <div className="details">
                                    <div className="title">The worst volume control UI in the world</div>
                                    <div className="description">npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.</div>
                                    <div className="others">
                                        <div className="author-time">
                                            <span>By</span>
                                            <div className="author-name">Patricia Morgan</div>
                                            <span>in</span>
                                            <div className="article-tag">Sampling techniques</div>
                                            <div className="upload-date">Oct, 12, 2019</div>
                                        </div>
                                        <div className="actions">
                                            <h2>FV</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3"></div>
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