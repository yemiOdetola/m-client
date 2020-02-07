import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/articles.scss';
import '../assets/styles/shared.scss';
import Header from './layouts/Header';
import PropTypes from 'prop-types';
import { fetchArticles, addToFavorites, updateUserFav, removeFromFavorites } from '../actions/articles';
import globals from '../globals';
import Loader from './utils/Loader';

export class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmark: false,
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    addToFav = (id) => {
        const payload = {
            userId: this.props.userDetails._id
        }
        this.props.updateUserFav(id, payload);
        this.props.addToFavorites(id, payload);
    }

    removeFromFav = (id) => {
        this.props.removeFromFavorites(id);
    }

    toggleToggle = () => {
        return this.setState({
            bookmark: !this.state.bookmark
        })
    }

    render() {
        if (!this.props.articles[0]) return <Loader loading={this.state.loading} />
        const articles = [];
        this.props.articles[0].forEach((article, index) => {
            articles.push(
                <article className="article" key={index}>
                    <div className="feature-img">
                        {article.feature_img ?
                            <img src={article.feature_img} alt={article.name} /> :
                            <img src={require('../assets/images/404.svg')} alt="not found" />
                        }
                    </div>
                    <div className="details">
                        <div className="tag"><span className="hash">#</span>{article.tag}</div>
                        <h2 className="title">
                            <Link to={`/article/${article._id}`}>{globals.trimTitle(article.title)}</Link>
                        </h2>
                        <div className="description"> <Link to={`/article/${article._id}`}>{globals.trimSubtitle(article.description)}</Link></div>
                        <div className="others">
                            <div className="author-time">
                                <div className="info author">by <Link to={`/user/${article.author._id}`}>{article.author.username}</Link> on {globals.converToLocal(article.createdAt)}</div>
                            </div>
                            <div className="actions">
                                <img src={require('../assets/images/unbookmark.svg')}
                                    className={globals.checkFavorite(article.favorites, this.props.userDetails._id)
                                        ? 'hide' : 'favorite'}
                                    onClick={() => this.addToFav(article._id)} alt="" />
                                <img src={require('../assets/images/bookmarked.svg')}
                                    className={globals.checkFavorite(article.favorites, this.props.userDetails._id)
                                        ? 'favorite' : 'hide'}
                                    onClick={() => this.removeFromFav(article._id)} alt="" />
                            </div>
                        </div>
                    </div>
                </article>
            )
        })
        return (
            <>
                <Header />
                <div className="articles-component component-spacing">
                    <div className="component-heading1 mb-4">All Articles</div>
                    <div className="row">
                        <div className="col-md-8">{articles}</div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="each-bar most-viewed">
                                    <div className="header">
                                        <h3 className="title">Most interactions!!!</h3>
                                        <div className="illustration-mello">
                                            <img src={require('../assets/images/mello.svg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="body">
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">01</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">02</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">03</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">04</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">05</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="each-bar popular-tags">
                                    <div className="bar-header"></div>
                                </div>
                            </div>
                        </div>
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
    articles: state.articles.articles,
    userDetails: state.auth.userDetails
})

const mapDispatchToProps = {
    addToFavorites,
    updateUserFav,
    removeFromFavorites,
    fetchArticles,
}

export default connect(mapstateToProps, mapDispatchToProps)(Articles)